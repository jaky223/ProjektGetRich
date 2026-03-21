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

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/google/auth")
public class GoogleController {

    // Vaš Client ID preuzet s vašeg frontenda (GoogleProvider.tsx)
    private static final String CLIENT_ID = "363574513803-dt95rpnkii47oqv3to360es8bgdh9iho.apps.googleusercontent.com";

    // Inicijaliziramo službeni GoogleIdTokenVerifier. Preporučeno je raditi ga samo
    // jednom i koristiti za sve zahtjeve.
    private final GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(),
            new GsonFactory())
            .setAudience(Collections.singletonList(CLIENT_ID))
            .build();

    @PostMapping({ "/login", "/register" })
    public ResponseEntity<?> receiveGoogleToken(@RequestBody Map<String, String> request) {
        String tokenString = request.get("token");

        if (tokenString != null && !tokenString.trim().isEmpty()) {
            try {
                // Službena verifikacija: provjerava digitalni potpis tokena, jesu li datumi
                // istekli, i audience (Client ID)
                GoogleIdToken idToken = verifier.verify(tokenString);

                if (idToken != null) {
                    Payload payload = idToken.getPayload();

                    System.out.println("\n========== USPJEŠNA GOOGLE PROVJERA (GOOGLE-API-CLIENT) ==========");
                    System.out.println("Email: " + payload.getEmail());
                    System.out.println("Je li email verificiran kod Googlea: " + payload.getEmailVerified());
                    System.out.println("Ime: " + payload.get("given_name"));
                    System.out.println("Prezime: " + payload.get("family_name"));
                    System.out.println("Slika profila: " + payload.get("picture"));
                    System.out.println("Google korisnički ID (sub): " + payload.getSubject());
                    System.out.println("==================================================================\n");

                    // OVDJE ZNAMO DA JE TOKEN 100% VALJAN I DA JE OSOBA ONA KOJOM SE PREDSTAVLJA

                    return ResponseEntity.ok(Map.of(
                            "message", "Token ispravan i potvrđen preko službene Google biblioteke!",
                            "firstName",
                            payload.get("given_name") != null ? payload.get("given_name") : "Google Korisnik",
                            "email", payload.getEmail() != null ? payload.getEmail() : ""));
                } else {
                    System.out.println("Token nije valjan (vjerojatno je istekao ili je lažan string).");
                    return ResponseEntity.status(401).body(Map.of("error", "Token nije valjan ili je istekao."));
                }
            } catch (Exception e) {
                System.out.println("\n[GRESKA] Iznimka prilikom verifikacije: " + e.getMessage());
                return ResponseEntity.status(401)
                        .body(Map.of("error", "Greška tijekom validacije tokena u biblioteci."));
            }
        }

        return ResponseEntity.status(400).body(Map.of("error", "Token nedostaje u zahtjevu."));
    }
}
