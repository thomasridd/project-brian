package com.github.onsdigital.publishers;

import com.github.onsdigital.content.statistic.data.TimeSeries;
import com.github.onsdigital.content.statistic.data.timeseries.TimeseriesValue;
import com.github.onsdigital.data.TimeSeriesObject;
import com.github.onsdigital.data.objects.TimeSeriesPoint;

/**
 * Created by thomasridd on 09/06/15.
 */
public class TimeSeriesPublisher {
    public static TimeSeries convertToContentLibraryTimeSeries(TimeSeriesObject timeSeriesObject) {
        TimeSeries timeSeriesPage = new TimeSeries();
        timeSeriesPage.cdid = timeSeriesObject.taxi;
        timeSeriesPage.description = timeSeriesObject.name;
        timeSeriesPage.seasonalAdjustment = timeSeriesObject.seasonallyAdjusted ? "SA" : "NSA";

        for (String key: timeSeriesObject.points.keySet()) {
            TimeSeriesPoint point = timeSeriesObject.points.get(key);
            TimeseriesValue value = convertToContentLibaryTimeseriesValue(point);

            timeSeriesPage.add(value);
        }
        return timeSeriesPage;
    }

    static TimeseriesValue convertToContentLibaryTimeseriesValue(TimeSeriesPoint point) {
        final String[] shortMonths = {"JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"};
        final String[] longMonths = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

        TimeseriesValue value = new TimeseriesValue();
        value.value = point.value;
        value.year = point.timeLabel.substring(0,4);
        value.date = value.year;

        value.month = "";
        if (point.period.equalsIgnoreCase("months")) {
            String monthNumber = point.timeLabel.substring(point.timeLabel.length()-2, point.timeLabel.length());
            int monthIndex = Integer.parseInt(monthNumber) - 1;

            value.month = longMonths[monthIndex];
            value.date = value.year + " " + shortMonths[monthIndex];
        }

        value.quarter = "";
        if (point.period.equalsIgnoreCase("quarters")) {
            value.quarter = point.timeLabel.substring(point.timeLabel.length()-2, point.timeLabel.length());
            value.date = value.year + " " + value.quarter;
        }

        return value;
    }
}
