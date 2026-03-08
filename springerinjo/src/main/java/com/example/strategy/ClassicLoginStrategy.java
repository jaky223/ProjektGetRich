package com.example.strategy;

import com.example.dto.UserLoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ClassicLoginStrategy implements LoginStrategy {

    @Override
    public boolean supports(String type) {
        return "classic".equalsIgnoreCase(type);
    }

    @Override
    public ResponseEntity<?> login(UserLoginRequest request) {
        // Ovdje bi išla stvarna provjera u bazi (UserService -> UserRepository itd.)
        return ResponseEntity.ok(Map.of("login", "classic login uspješan za " + request.getUsername()));
    }
}
