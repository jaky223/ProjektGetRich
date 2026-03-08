package com.example.strategy;

import com.example.dto.UserLoginRequest;
import org.springframework.http.ResponseEntity;

public interface LoginStrategy {
    boolean supports(String type);

    ResponseEntity<?> login(UserLoginRequest request);
}
