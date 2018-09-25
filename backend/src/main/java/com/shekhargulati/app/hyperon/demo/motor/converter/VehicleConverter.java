package com.shekhargulati.app.hyperon.demo.motor.converter;

import com.shekhargulati.app.hyperon.demo.motor.api.dto.VehicleDto;
import com.shekhargulati.app.hyperon.demo.motor.domain.Vehicle;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class VehicleConverter implements Converter<Vehicle, VehicleDto> {

    @Override
    public VehicleDto convert(Vehicle vehicle) {
        Objects.requireNonNull(vehicle, "Vehicle can not be null.");
        VehicleDto dto = new VehicleDto();
        dto.setMakeId(vehicle.getMakeId());
        dto.setModelId(vehicle.getModelId());
        dto.setTypeId(vehicle.getTypeId());
        dto.setProductionYear(vehicle.getProductionYear());
        return dto;
    }
}
