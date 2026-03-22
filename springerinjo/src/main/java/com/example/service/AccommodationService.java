package com.example.service;

import com.example.databasexpo.Accommodation;
import com.example.databasexpo.AccommodationRepository;
import com.example.databasexpo.User;
import com.example.databasexpo.UserRepository;
import com.example.dto.AccommodationCreateDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;
    private final UserRepository userRepository;

    private static final String UPLOAD_DIR = "uploads/accommodations/";

    public AccommodationService(AccommodationRepository accommodationRepository, UserRepository userRepository) {
        this.accommodationRepository = accommodationRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public Accommodation createAccommodation(AccommodationCreateDto dto) throws IOException {
        User user = userRepository.findByUsername(dto.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found: " + dto.getUsername()));

        Accommodation acc = new Accommodation();
        acc.setUser(user);
        acc.setTitle(dto.getTitle());
        acc.setType(dto.getType());
        acc.setGuests(dto.getGuests());
        acc.setBedrooms(dto.getBedrooms());
        acc.setBeds(dto.getBeds());
        acc.setBathrooms(dto.getBathrooms());
        acc.setPricePerNight(dto.getPricePerNight());
        acc.setCountry(dto.getCountry());
        acc.setCity(dto.getCity());
        acc.setPostalCode(dto.getPostalCode());
        acc.setStreet(dto.getStreet());
        acc.setDescription(dto.getDescription());
        acc.setPetsAllowed(dto.getPetsAllowed());
        acc.setAmenities(dto.getAmenities() != null ? dto.getAmenities() : new ArrayList<>());

        List<String> imageUrls = new ArrayList<>();
        if (dto.getImages() != null && !dto.getImages().isEmpty()) {
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            for (MultipartFile file : dto.getImages()) {
                if (file.isEmpty()) continue;
                String filename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
                Path filePath = uploadPath.resolve(filename);
                Files.copy(file.getInputStream(), filePath);
                imageUrls.add("/" + UPLOAD_DIR + filename);
            }
        }
        acc.setImageUrls(imageUrls);

        return accommodationRepository.save(acc);
    }
}
