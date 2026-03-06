package com.example.controller;

import com.example.dto.UserLoginRequest;
import com.example.dto.UserRegistrationRequest;
import com.example.strategy.LoginStrategy;
import com.example.strategy.RegistrationStrategy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final List<LoginStrategy> loginStrategies;
    private final List<RegistrationStrategy> registrationStrategies;

    public UserController(List<LoginStrategy> loginStrategies, List<RegistrationStrategy> registrationStrategies) {
        this.loginStrategies = loginStrategies;
        this.registrationStrategies = registrationStrategies;
    }

    @PostMapping("/register/{type}")
    public ResponseEntity<?> registerUser(@PathVariable String type, @RequestBody UserRegistrationRequest request) {
        for (RegistrationStrategy strategy : registrationStrategies) {
            if (strategy.supports(type)) {
                return strategy.register(request);
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Nepoznata metoda registracije");
    }

    @PostMapping("/login/{type}")
    public ResponseEntity<?> loginUser(@PathVariable String type, @RequestBody UserLoginRequest request) {
        for (LoginStrategy strategy : loginStrategies) {
            if (strategy.supports(type)) {
                return strategy.login(request);
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Nepoznata metoda logina");
    }
}
