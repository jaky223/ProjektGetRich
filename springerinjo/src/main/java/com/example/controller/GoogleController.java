package com.example.controller;

import com.example.dto.UserLoginRequest;
import com.example.dto.UserRegistrationRequest;
import com.example.strategy.LoginStrategy;
import com.example.strategy.RegistrationStrategy;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/google/auth")
public class GoogleController {

    private final List<LoginStrategy> loginStrategies;
    private final List<RegistrationStrategy> registrationStrategies;
    private final GoogleIdTokenVerifier verifier;

    public GoogleController(List<LoginStrategy> loginStrategies, 
                            List<RegistrationStrategy> registrationStrategies,
                            @org.springframework.beans.factory.annotation.Value("${GOOGLE_CLIENT_ID:363574513803-dt95rpnkii47oqv3to360es8bgdh9iho.apps.googleusercontent.com}") String clientId) {
        this.loginStrategies = loginStrategies;
        this.registrationStrategies = registrationStrategies;
        this.verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), new GsonFactory())
                .setAudience(Collections.singletonList(clientId))
                .build();
    }

    public GoogleIdToken verifyToken(String tokenString) throws Exception {
        return verifier.verify(tokenString);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginWithGoogle(@RequestBody UserLoginRequest request) {
        for (LoginStrategy strategy : loginStrategies) {
            if (strategy.supports("google")) {
                return strategy.login(request);
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Google login strategija nije pronađena");
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerWithGoogle(@RequestBody UserRegistrationRequest request) {
        for (RegistrationStrategy strategy : registrationStrategies) {
            if (strategy.supports("google")) {
                return strategy.register(request);
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Google registracijska strategija nije pronađena");
    }
}
