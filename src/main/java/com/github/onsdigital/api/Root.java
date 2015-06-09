package com.github.onsdigital.api;

import com.github.davidcarboni.restolino.framework.Startup;
import com.github.onsdigital.async.CubeProcessor;
import com.github.onsdigital.async.Processor;
import com.github.onsdigital.data.DataCube;
import com.github.onsdigital.data.DataFuture;
import com.github.onsdigital.data.DataSet;
import com.github.onsdigital.data.TimeSeries;
import com.github.onsdigital.data.objects.DataCubeSet;
import com.github.onsdigital.readers.DataCubeReaderTable;
import com.github.onsdigital.readers.DataCubeReaderWDA;
import com.github.onsdigital.readers.DataSetReaderCSDB;

import java.io.IOException;
import java.util.HashMap;
import java.util.concurrent.ExecutionException;

/**
 * Created by thomasridd on 09/03/15.
 */

public class Root implements Startup {

    public static DataFuture master;
    public static DataCubeSet cubeMaster;

    @Override
    public void init() {

//        try {
//            master = new DataFuture();
//            master = DataSetReaderCSDB.readDirectory("/imports/csdb");
//            cubeMaster = DataCubeReaderWDA.readDirectory("/imports/wda");
//
//            DataCubeSet moreCubes = DataCubeReaderTable.readDirectory("/imports/tabular");
//            for(String key: moreCubes.cubes.keySet()) {
//                cubeMaster.cubes.put(key, moreCubes.cubes.get(key));
//            }
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        } finally {
//            Processor.shutdown();
//            CubeProcessor.shutdown();
//        }
//        System.out.println("Startup");
    }

    //TODO Replace this with code worth the effort
    public static TimeSeries getTimeSeries(String taxi) {
        try {
            if(master.timeSeries.get(taxi) == null || master.timeSeries.get(taxi).isDone() == false) {
                return null;
            } else {
                return master.timeSeries.get(taxi).get();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        return null;
    }
}