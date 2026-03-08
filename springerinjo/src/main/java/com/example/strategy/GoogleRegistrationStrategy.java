package com.example.strategy;

import com.example.dto.UserRegistrationRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class GoogleRegistrationStrategy implements RegistrationStrategy {

    @Override
    public boolean supports(String type) {
        return "google".equalsIgnoreCase(type);
    }

    @Override
    public ResponseEntity<?> register(UserRegistrationRequest request) {
        return ResponseEntity.ok(Map.of("registration", "google registration"));
    }
}
