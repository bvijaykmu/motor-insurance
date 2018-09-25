package com.shekhargulati.app.hyperon.demo.motor.converter;

import com.shekhargulati.app.hyperon.demo.motor.api.dto.DictionaryEntryDto;
import com.shekhargulati.app.hyperon.demo.motor.service.DictionaryEntry;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class DictionaryEntryConverter implements Converter<DictionaryEntry, DictionaryEntryDto> {

	@Override
	public DictionaryEntryDto convert(DictionaryEntry dictionaryEntry) {
		Objects.requireNonNull(dictionaryEntry, "Dictionary entry can not be null.");
		DictionaryEntryDto dto = new DictionaryEntryDto();
		dto.setCode(dictionaryEntry.getCode());
		dto.setName(dictionaryEntry.getName());
		return dto;
	}

	public List<DictionaryEntryDto> convertList(List<DictionaryEntry> dictionaryEntries) {
		Objects.requireNonNull(dictionaryEntries, "Dictionary entries list can not be null.");
		return dictionaryEntries
				.stream()
				.map(this::convert)
				.collect(Collectors.toList());
	}
}
