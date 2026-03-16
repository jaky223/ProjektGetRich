package com.example.strategy;

import com.example.databasexpo.User;
import com.example.databasexpo.UserRepository;
import com.example.dto.UserLoginRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ClassicLoginStrategy implements LoginStrategy {

    private final UserRepository userRepository;

    public ClassicLoginStrategy(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean supports(String type) {
        return "classic".equalsIgnoreCase(type);
    }

    @Override
    public ResponseEntity<?> login(UserLoginRequest request) {

        List<String> errors = new ArrayList<>();
        String identifier = request.getUsername() != null && !request.getUsername().trim().isEmpty()
                ? request.getUsername()
                : request.getEmail();

        if (identifier == null || identifier.trim().isEmpty()) {
            errors.add("Korisničko ime ili email ne smiju biti prazni");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        User user = userRepository.findByUsernameAndPassword(identifier, request.getPassword()).orElse(null);
        if (user == null) {
            user = userRepository.findByEmailAndPassword(identifier, request.getPassword()).orElse(null);
        }

        if (user == null) {
            errors.add("Krivo korisničko ime/email ili lozinka");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        Map<String, Object> responseUser = new HashMap<>();
        responseUser.put("username", user.getUsername());
        responseUser.put("email", user.getEmail());
        responseUser.put("firstName", user.getFirstName());
        responseUser.put("lastName", user.getLastName());
        responseUser.put("dateOfBirth", user.getDateOfBirth());
        responseUser.put("phoneNumber", user.getPhoneNumber());

        return ResponseEntity.ok(responseUser);
    }
}
