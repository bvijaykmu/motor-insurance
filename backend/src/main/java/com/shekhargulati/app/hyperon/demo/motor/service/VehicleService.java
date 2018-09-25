package com.shekhargulati.app.hyperon.demo.motor.service;

import com.shekhargulati.app.hyperon.demo.motor.domain.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
	private final QuoteService quoteService;

	@Autowired
	public VehicleService(QuoteService quoteService) {
		this.quoteService = quoteService;
	}

	public Vehicle getVehicle() {
		return quoteService.getQuote().getVehicle();
	}
}
