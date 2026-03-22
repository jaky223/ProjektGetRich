package com.example.controller;

import com.example.databasexpo.Accommodation;
import com.example.dto.AccommodationCreateDto;
import com.example.service.AccommodationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accommodations")
@CrossOrigin(origins = "http://localhost:3000") // Assuming Next.js runs on port 3000
public class AccommodationController {

    private final AccommodationService accommodationService;

    public AccommodationController(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<?> createAccommodation(
            @RequestPart("data") AccommodationCreateDto dto,
            @RequestPart(value = "images", required = false) java.util.List<org.springframework.web.multipart.MultipartFile> images) {
        try {
            if (images != null) {
                dto.setImages(images);
            }
            Accommodation saved = accommodationService.createAccommodation(dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error creating accommodation: " + e.getMessage());
        }
    }
}
