package com.github.onsdigital.async;

import com.github.onsdigital.data.DataFuture;
import com.github.onsdigital.data.DataSet;
import com.github.onsdigital.data.TimeSeries;
import com.github.onsdigital.data.objects.TimeSeriesPoint;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.nio.file.Path;
import java.util.*;
import java.util.concurrent.*;

/**
 * Created by thomasridd on 18/03/15.
 */
public class Processor implements  Runnable{

    public static final ExecutorService timeSeriesPool = Executors.newFixedThreadPool(100);
    public static final ExecutorService fileProcessPool = Executors.newFixedThreadPool(100);
    public static final ExecutorService processorPool = Executors.newFixedThreadPool(20);

    private Path file;

    private Map<String, TimeSeries> timeSerieses = new HashMap<>();

    public Processor(Path file) {
        this.file = file;
    }

    /**
     * Does a first pass through the files
     *
     * Generates a DataFuture object and their accompanying time series
     *
     * @return a promise of a DataFuture with
     */
    public Future<DataFuture> getSkeleton() {
        Callable<DataFuture> task = new Callable<DataFuture>() {
            @Override
            public DataFuture call() throws Exception {


                DataFuture result = new DataFuture();
                Scanner scanner =new Scanner(file, "cp1252");

                while (scanner.hasNextLine()) {
                    String line = scanner.nextLine();
                    if (StringUtils.startsWith(line, "92")) {

                        // Get the Timeseries information:
                        // 92ABCDY......
                        line = StringUtils.substring(line, 2);
                        String taxi = line.substring(0,4);
                        char periodicity = line.charAt(4);

                        // Get or create the TimeSeries
                        TimeSeries timeSeries = timeSerieses.get(taxi);
                        if (timeSeries == null) {
                            timeSeries = new TimeSeries();
                            timeSeries.taxi = taxi;

                            TimeSeriesCallable callable = new TimeSeriesCallable(timeSeries);
                            result.addSeries(taxi, timeSeriesPool.submit(callable));

                            timeSerieses.put(taxi, timeSeries);
                        }

                        // Add to the TimeSeries:
                        if (periodicity == 'A') {
                            timeSeries.shouldHaveYearly = true;
                        } else if (periodicity == 'Q') {
                            timeSeries.shouldHaveQuarterly = true;
                        } else if (periodicity == 'M') {
                            timeSeries.shouldHaveMonthly = true;
                        }
                    }
                }

                return result;
            }
        };
        return fileProcessPool.submit(task);
    }

    /**
     *  CONVERTS A SERIES OF STRINGS READ FROM A CSDB FILE BY THE READFILE METHODS TO A SERIES
     *
     * @param lines
     * @return
     */
    private TimeSeries seriesFromStringList(ArrayList<String> lines) {
        TimeSeries series = new TimeSeries();
        int startInd = 1;
        int year = 1881;
        String mqa = "A";
        int iteration = 1;

        for (String line : lines) {
            try {
                int LineType = Integer.parseInt(line.substring(0, 2));
                if (LineType == 92) { // TOP LINE (SERIES CODE)
                    series = timeSerieses.get(line.substring(2,6));

                } else if (LineType == 93) { // SECOND LINE (DESCRIPTION)
                    series.name = line.substring(2);

                } else if (LineType == 96) { // THIRD LINE (START DATE)
                    startInd = Integer.parseInt(line.substring(9, 11).trim());
                    mqa = line.substring(2, 3);
                    year = Integer.parseInt(line.substring(4, 8));

                } else if (LineType == 97) { // OTHER LINES (APPEND IN BLOCKS)
                    String values = line.substring(2);
                    while (values.length() > 9) {
                        // GET FIRST VALUE
                        String oneValue = values.substring(0, 10).trim();

                        TimeSeriesPoint point = new TimeSeriesPoint(DateLabel(year, startInd, mqa, iteration), oneValue);
                        series.addPoint(point);

                        // TRIM OFF THE BEGINNING
                        values = values.substring(10);
                        iteration += 1;
                    }
                }
            } catch (NumberFormatException e) {

            }
        }

        return series;
    }

    /**
     * HELPER METHOD THAT DETERMINES THE CORRECT LABEL BASED ON START DATE, A TIME PERIOD, AND THE ITERATION
     *
     * @param year
     * @param startInd
     * @param mqa
     * @param iteration
     * @return
     */
    private static String DateLabel(int year, int startInd, String mqa, int iteration) {
        if (mqa.equals("Y") || mqa.equals("A")) {
            return (year + iteration - 1) + "";
        } else if(mqa.equals("M")) {
            int finalMonth = (startInd + iteration - 2) % 12;
            int yearsTaken = iteration / 12;
            return (year + yearsTaken) + " " + String.format("%02d", finalMonth + 1);
        } else {
            int finalQuarter = (startInd + iteration - 2) % 4;
            int yearsTaken = iteration / 4;
            return String.format("%d Q%d", year + yearsTaken, finalQuarter + 1);
        }

    }

    public void process() {
        processorPool.submit(this);
    }

    @Override
    public void run() {

        try {
            System.out.println("Starting to process " + file);
            // USE WINDOWS ENCODING TO READ THE FILE BECAUSE IT IS A WIN CSDB
            List<String> lines = FileUtils.readLines(file.toFile(), "cp1252");
            lines.add("92"); // THROW A 92 ON THE END

            ArrayList<String> seriesBuffer = new ArrayList<>();

            //WALK THROUGH THE FILE
            for (String line : lines) {
                try {
                    int LineType = Integer.parseInt(line.substring(0, 2));

                    // WHEN WE GET TO A LINE 92 (TIME SERIES BLOCK START)
                    if (LineType == 92) {
                        if (seriesBuffer.size() > 0) {
                            // PARSE THE BLOCK JUST COLLECTED
                            TimeSeries series = seriesFromStringList(seriesBuffer);

                            // COMBINE IT WITH AN EXISTING SERIES
                            if (timeSerieses.containsKey(series.taxi)) {
                                TimeSeries existing = timeSerieses.get(series.taxi);
                                for (TimeSeriesPoint point : series.points.values()) {
                                    existing.addPoint(point);
                                }
                            }
                        }
                        seriesBuffer = new ArrayList<>();
                        seriesBuffer.add(line);
                    } else if (LineType > 92) {
                        seriesBuffer.add(line);
                    }
                } catch (NumberFormatException e) {

                }
            }
            System.out.println("Finished processing " + file);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void shutdown() {
        // Shut down the pools.
        // This instructs them to shut down once all tasks have completed
        // but does not block until that time.
        Processor.fileProcessPool.shutdown();
        Processor.processorPool.shutdown();
        Processor.timeSeriesPool.shutdown();
    }

}
