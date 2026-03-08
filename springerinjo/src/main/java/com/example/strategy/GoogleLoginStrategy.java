package com.example.strategy;

import com.example.dto.UserLoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class GoogleLoginStrategy implements LoginStrategy {

    @Override
    public boolean supports(String type) {
        return "google".equalsIgnoreCase(type);
    }

    @Override
    public ResponseEntity<?> login(UserLoginRequest request) {
        return ResponseEntity.ok(Map.of("login", "google login"));
    }
}
