package com.example.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import com.example.databasexpo.User;
import com.example.databasexpo.UserRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/google/auth")
public class GoogleController {

    private final UserRepository userRepository;

    // Vaš Client ID preuzet s vašeg frontenda (GoogleProvider.tsx)
    private static final String CLIENT_ID = "363574513803-dt95rpnkii47oqv3to360es8bgdh9iho.apps.googleusercontent.com";

    // Inicijaliziramo službeni GoogleIdTokenVerifier. Preporučeno je raditi ga samo
    // jednom i koristiti za sve zahtjeve.
    private final GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(),
            new GsonFactory())
            .setAudience(Collections.singletonList(CLIENT_ID))
            .build();

    public GoogleController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginWithGoogle(@RequestBody Map<String, String> request) {
        return processGoogleAuth(request, false);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerWithGoogle(@RequestBody Map<String, String> request) {
        return processGoogleAuth(request, true);
    }

    private ResponseEntity<?> processGoogleAuth(Map<String, String> request, boolean isRegistration) {
        String tokenString = request.get("token");

        if (tokenString != null && !tokenString.trim().isEmpty()) {
            try {
                GoogleIdToken idToken = verifier.verify(tokenString);

                if (idToken != null) {
                    Payload payload = idToken.getPayload();
                    String email = payload.getEmail();

                    Optional<User> existingUser = userRepository.findByEmail(email);
                    User user;

                    if (existingUser.isPresent()) {
                        user = existingUser.get();
                        return ResponseEntity.ok(Map.of(
                                "message", "Uspješna Google prijava!",
                                "firstName", user.getFirstName(),
                                "lastName", user.getLastName(),
                                "email", user.getEmail(),
                                "username", user.getUsername()));
                    } else {
                        if (isRegistration) {
                            // Registracija novog korisnika
                            user = new User();
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
                        } else {
                            // Login pokušaj, ali korisnik ne postoji
                            return ResponseEntity.status(404).body(Map.of(
                                    "error", "USER_NOT_FOUND",
                                    "message", "Korisnik nije pronađen. Molimo registrirajte se.",
                                    "email", email,
                                    "firstName", payload.get("given_name") != null ? payload.get("given_name") : "",
                                    "lastName", payload.get("family_name") != null ? payload.get("family_name") : ""
                            ));
                        }
                    }
                } else {
                    return ResponseEntity.status(401).body(Map.of("error", "Token nije valjan ili je istekao."));
                }
            } catch (Exception e) {
                return ResponseEntity.status(401)
                        .body(Map.of("error", "Greška tijekom validacije tokena: " + e.getMessage()));
            }
        }

        return ResponseEntity.status(400).body(Map.of("error", "Token nedostaje u zahtjevu."));
    }
}
