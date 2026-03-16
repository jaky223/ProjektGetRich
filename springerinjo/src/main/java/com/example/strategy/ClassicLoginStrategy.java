package com.example.strategy;

import com.example.databasexpo.UserRepository;
import com.example.dto.UserLoginRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

        if (userRepository.findByUsernameAndPassword(request.getUsername(), request.getPassword()).isEmpty()) {
            errors.add("Krivo korisničko ime ili lozinka");
        }

        if (!errors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        return ResponseEntity.ok(Map.of("login", "classic login uspješan za " + request.getUsername()));
    }
}
