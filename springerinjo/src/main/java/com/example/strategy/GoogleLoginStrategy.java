package com.example.strategy;

import com.example.controller.GoogleController;
import com.example.databasexpo.User;
import com.example.databasexpo.UserRepository;
import com.example.dto.UserLoginRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class GoogleLoginStrategy implements LoginStrategy {

    private final UserRepository userRepository;
    private final GoogleController googleController;

    public GoogleLoginStrategy(UserRepository userRepository, @Lazy GoogleController googleController) {
        this.userRepository = userRepository;
        this.googleController = googleController;
    }

    @Override
    public boolean supports(String type) {
        return "google".equalsIgnoreCase(type);
    }

    @Override
    public ResponseEntity<?> login(UserLoginRequest request) {
        String tokenString = request.getToken();

        if (tokenString == null || tokenString.trim().isEmpty()) {
            return ResponseEntity.status(400).body(Map.of("error", "Token nedostaje u zahtjevu."));
        }

        try {
            GoogleIdToken idToken = googleController.verifyToken(tokenString);

            if (idToken != null) {
                Payload payload = idToken.getPayload();
                String email = payload.getEmail();

                Optional<User> existingUser = userRepository.findByEmail(email);

                if (existingUser.isPresent()) {
                    User user = existingUser.get();
                    return ResponseEntity.ok(Map.of(
                            "message", "Uspješna Google prijava!",
                            "firstName", user.getFirstName(),
                            "lastName", user.getLastName(),
                            "email", user.getEmail(),
                            "username", user.getUsername()));
                } else {
                    return ResponseEntity.status(404).body(Map.of(
                            "error", "USER_NOT_FOUND",
                            "message", "Korisnik nije pronađen. Molimo registrirajte se.",
                            "email", email,
                            "firstName", payload.get("given_name") != null ? payload.get("given_name") : "",
                            "lastName", payload.get("family_name") != null ? payload.get("family_name") : ""
                    ));
                }
            } else {
                return ResponseEntity.status(401).body(Map.of("error", "Token nije valjan ili je istekao."));
            }
        } catch (Exception e) {
            return ResponseEntity.status(401)
                    .body(Map.of("error", "Greška tijekom validacije tokena: " + e.getMessage()));
        }
    }
}
