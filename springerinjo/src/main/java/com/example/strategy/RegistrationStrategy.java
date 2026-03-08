package com.example.strategy;

import com.example.dto.UserRegistrationRequest;
import org.springframework.http.ResponseEntity;

public interface RegistrationStrategy {
    boolean supports(String type);

    ResponseEntity<?> register(UserRegistrationRequest request);
}
