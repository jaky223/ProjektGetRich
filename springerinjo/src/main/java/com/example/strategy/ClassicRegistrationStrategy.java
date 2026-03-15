package com.example.strategy;

import com.example.databasexpo.User;
import com.example.dto.UserRegistrationRequest;
import com.example.validation.UserAttributesValidator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.databasexpo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ClassicRegistrationStrategy implements RegistrationStrategy {

    private final UserRepository userRepository;

    @Autowired
    public ClassicRegistrationStrategy(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean supports(String type) {
        return "classic".equalsIgnoreCase(type);
    }

    @Override
    public ResponseEntity<?> register(UserRegistrationRequest request) {
        System.out.println(
                "DEBUG REGISTER: Received Request = " + request.getUsername() + ", dob = " + request.getDateOfBirth());
        List<String> errors = new ArrayList<>();

        if (!UserAttributesValidator.isValidUsername(request.getUsername())) {
            errors.add(
                    "Neispravno korisničko ime. Mora imati barem 3 znaka i sadržavati samo slova, brojeve, točku, crticu ili donju crtu.");
        }
        if (!UserAttributesValidator.isValidEmail(request.getEmail())) {
            errors.add("Neispravan format email adrese.");
        }
        if (!UserAttributesValidator.isValidPassword(request.getPassword())) {
            errors.add(
                    "Neispravna lozinka. Mora imati barem 8 znakova i sadržavati barem jedno malo slovo, jedno veliko slovo te jedan broj.");
        }
        if (!UserAttributesValidator.isValidName(request.getFirstName())) {
            errors.add("Neispravno ime. Mora sadržavati barem 2 slova.");
        }
        if (!UserAttributesValidator.isValidName(request.getLastName())) {
            errors.add("Neispravno prezime. Mora sadržavati barem 2 slova.");
        }
        if (!UserAttributesValidator.isValidDateOfBirth(request.getDateOfBirth())) {
            errors.add("Neispravan format datuma rođenja. Očekivani format je DD-MM-GGGG.");
        }
        if (!UserAttributesValidator.isValidPhoneNumber(request.getPhoneNumber())) {
            errors.add("Neispravan broj telefona.");
        }

        if (!errors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        user.setDateOfBirth(LocalDate.parse(request.getDateOfBirth(), formatter));
        user.setPhoneNumber(request.getPhoneNumber());

        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body("Korisnik uspješno registriran (classic)!");
    }
}
