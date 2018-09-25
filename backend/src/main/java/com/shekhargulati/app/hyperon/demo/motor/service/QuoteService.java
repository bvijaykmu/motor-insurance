package com.shekhargulati.app.hyperon.demo.motor.service;

import com.shekhargulati.app.hyperon.demo.motor.domain.Quote;
import com.shekhargulati.app.hyperon.demo.motor.example.Motor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import javax.annotation.PostConstruct;

@Service
@SessionScope
public class QuoteService {

    private final Motor motor;

    private Quote sessionQuote;

    @Autowired
    public QuoteService(Motor motor) {
        this.motor = motor;
    }

    @PostConstruct
    public void initializeQuote() {
        sessionQuote = motor.createQuote();
    }

    public Quote getQuote() {
        return sessionQuote;
    }
}
