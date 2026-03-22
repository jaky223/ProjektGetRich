package com.example.strategy;

import com.example.controller.GoogleController;
import com.example.databasexpo.User;
import com.example.databasexpo.UserRepository;
import com.example.dto.UserRegistrationRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class GoogleRegistrationStrategy implements RegistrationStrategy {

    private final UserRepository userRepository;
    private final GoogleController googleController;

    public GoogleRegistrationStrategy(UserRepository userRepository, @Lazy GoogleController googleController) {
        this.userRepository = userRepository;
        this.googleController = googleController;
    }

    @Override
    public boolean supports(String type) {
        return "google".equalsIgnoreCase(type);
    }

    @Override
    public ResponseEntity<?> register(UserRegistrationRequest request) {
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
                    // Registracija novog korisnika
                    User user = new User();
                    user.setEmail(email);
                    user.setUsername(email.split("@")[0] + "_" + payload.getSubject().substring(0, 5));
                    user.setPassword("OAUTH_GOOGLE_ACCOUNT");
                    user.setFirstName((String) payload.get("given_name"));
                    user.setLastName((String) payload.get("family_name"));

                    userRepository.save(user);
                    return ResponseEntity.ok(Map.of(
                            "message", "Uspješna Google registracija!",
                            "firstName", user.getFirstName(),
                            "lastName", user.getLastName(),
                            "email", user.getEmail(),
                            "username", user.getUsername()));
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
