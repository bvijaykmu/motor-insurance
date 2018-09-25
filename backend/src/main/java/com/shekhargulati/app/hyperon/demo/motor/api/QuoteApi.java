package com.shekhargulati.app.hyperon.demo.motor.api;

import com.shekhargulati.app.hyperon.demo.motor.api.dto.QuoteDto;
import com.shekhargulati.app.hyperon.demo.motor.converter.QuoteConverter;
import com.shekhargulati.app.hyperon.demo.motor.domain.Quote;
import com.shekhargulati.app.hyperon.demo.motor.example.Motor;
import com.shekhargulati.app.hyperon.demo.motor.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quote")
public class QuoteApi {

    private final QuoteService quoteService;

    private final QuoteConverter quoteConverter;

    private final Motor motor;

    @Autowired
    public QuoteApi(QuoteService quoteService, QuoteConverter quoteConverter, Motor motor) {
        this.quoteService = quoteService;
        this.quoteConverter = quoteConverter;
        this.motor = motor;
    }

    @GetMapping
    public QuoteDto getQuote() {
        Quote quote = quoteService.getQuote();
        motor.calculate(quote);
        return quoteConverter.convert(quote);
    }
}
