package com.shekhargulati.app.hyperon.demo.motor.adapter;

import com.shekhargulati.app.hyperon.demo.motor.domain.Address;
import pl.decerto.hyperon.ext.adapter.Adapter;
import pl.decerto.hyperon.ext.adapter.Mapping;

public class AddressAdapter extends Adapter {

	private Address address;

	public AddressAdapter(Address address) {
		this.address = address;
	}

	@Override
	protected Mapping getMapping() {
		return new Mapping()
			.add("city", address.getCity())
			.add("street", address.getStreet())
			.add("zipcode", address.getZipCode());
	}

}
