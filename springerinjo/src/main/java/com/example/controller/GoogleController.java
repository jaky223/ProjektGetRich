package com.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/google/auth")
public class GoogleController {

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping({"/login", "/register"})
    public ResponseEntity<?> receiveGoogleToken(@RequestBody Map<String, String> request) {
        String token = request.get("token");
        
        if (token != null && !token.trim().isEmpty()) {
            try {
                // Službeni Googleov URL za validaciju tokena (najjednostavniji način)
                String googleUrl = "https://oauth2.googleapis.com/tokeninfo?id_token=" + token;
                
                // RestTemplate koristimo za slanje GET zahtjeva Googleu
                // Ako je token OK, Google vraća 200 OK i JSON s podacima
                // Ako je token lažan ili istekao, Google vraća 400 Bad Request
                ResponseEntity<Map> googleResponse = restTemplate.getForEntity(googleUrl, Map.class);
                
                if (googleResponse.getStatusCode().is2xxSuccessful() && googleResponse.getBody() != null) {
                    Map<String, Object> payload = googleResponse.getBody();
                    
                    System.out.println("\n========== USPJEŠNA GOOGLE PROVJERA ==========");
                    System.out.println("Email: " + payload.get("email"));
                    System.out.println("Ime: " + payload.get("given_name"));
                    System.out.println("Prezime: " + payload.get("family_name"));
                    System.out.println("Slika profila: " + payload.get("picture"));
                    System.out.println("Google ID (sub): " + payload.get("sub"));
                    System.out.println("Svi preuzeti podaci:\n" + payload);
                    System.out.println("==============================================\n");
                    
                    // OVDJE SADA ZNAMO DA JE KORISNIK STVARNO TA OSOBA (Provjereno na Google serveru)
                    // TODO: Ovdje možete dodati provjeru "ako korisnik ne postoji u bazi, spremi ga"
                    
                    return ResponseEntity.ok(Map.of(
                        "message", "Token ispravan i potvrđen na Googleu!",
                        "firstName", payload.get("given_name") != null ? payload.get("given_name") : "Google Korisnik",
                        "email", payload.get("email") != null ? payload.get("email") : ""
                    ));
                }
            } catch (Exception e) {
                // Uhvatit će HttpClientErrorException ako Google vrati 400 Bad Request (invalid token)
                System.out.println("\n[GRESKA] Neispravan token ili je istekao: " + e.getMessage());
                return ResponseEntity.status(401).body(Map.of("error", "Token nije valjan ili je istekao."));
            }
        }
        
        return ResponseEntity.status(400).body(Map.of("error", "Token nedostaje u zahtjevu."));
    }
}
