package com.shekhargulati.app.hyperon.demo.motor.adapter;

import com.shekhargulati.app.hyperon.demo.motor.domain.Vehicle;
import pl.decerto.hyperon.ext.adapter.Adapter;
import pl.decerto.hyperon.ext.adapter.Mapping;

public class VehicleAdapter extends Adapter {

    private Vehicle vehicle;

    public VehicleAdapter(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    @Override
    protected Mapping getMapping() {
        return new Mapping()
                .add("makeId", vehicle.getMakeId())
                .add("typeId", vehicle.getTypeId())
                .add("modelId", vehicle.getModelId())
                .add("productionYear", vehicle.getProductionYear());
    }

}
