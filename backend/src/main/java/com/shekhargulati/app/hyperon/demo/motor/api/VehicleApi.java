package com.shekhargulati.app.hyperon.demo.motor.api;

import com.shekhargulati.app.hyperon.demo.motor.api.dto.VehicleDto;
import com.shekhargulati.app.hyperon.demo.motor.converter.VehicleConverter;
import com.shekhargulati.app.hyperon.demo.motor.domain.Vehicle;
import com.shekhargulati.app.hyperon.demo.motor.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle")
public class VehicleApi {

    private final VehicleService vehicleService;
    private final VehicleConverter vehicleConverter;

    @Autowired
    public VehicleApi(VehicleService vehicleService, VehicleConverter vehicleConverter) {
        this.vehicleService = vehicleService;
        this.vehicleConverter = vehicleConverter;
    }

    @GetMapping
    public VehicleDto getVehicle() {
        return vehicleConverter.convert(vehicleService.getVehicle());
    }

    @PutMapping("/productionYear")
    public void setProductionYear(@RequestBody Integer productionYear) {
        Vehicle vehicle = vehicleService.getVehicle();
        vehicle.setProductionYear(productionYear);
        vehicle.setMakeId(0);
        vehicle.setTypeId(0);
        vehicle.setModelId(0);
    }

    @PutMapping("/make")
    public void setMake(@RequestBody Integer makeId) {
        Vehicle vehicle = vehicleService.getVehicle();
        vehicle.setMakeId(makeId);
        vehicle.setTypeId(0);
        vehicle.setModelId(0);
    }

    @PutMapping("/model")
    public void setModel(@RequestBody Integer modelId) {
        Vehicle vehicle = vehicleService.getVehicle();
        vehicle.setModelId(modelId);
    }

    @PutMapping("/type")
    public void setType(@RequestBody Integer typeId) {
        Vehicle vehicle = vehicleService.getVehicle();
        vehicle.setTypeId(typeId);
        vehicle.setModelId(0);
    }
}
