package com.example.dto;

import org.springframework.web.multipart.MultipartFile;
import java.math.BigDecimal;
import java.util.List;

public class AccommodationCreateDto {
    private String username;
    private String title;
    private String type;
    private Integer guests;
    private Integer bedrooms;
    private Integer beds;
    private Integer bathrooms;
    private BigDecimal pricePerNight;
    private String country;
    private String city;
    private String postalCode;
    private String street;
    private String description;
    private Boolean petsAllowed;
    private List<String> amenities;
    
    @com.fasterxml.jackson.annotation.JsonIgnore
    private List<MultipartFile> images;

    public AccommodationCreateDto() {}

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public Integer getGuests() { return guests; }
    public void setGuests(Integer guests) { this.guests = guests; }
    public Integer getBedrooms() { return bedrooms; }
    public void setBedrooms(Integer bedrooms) { this.bedrooms = bedrooms; }
    public Integer getBeds() { return beds; }
    public void setBeds(Integer beds) { this.beds = beds; }
    public Integer getBathrooms() { return bathrooms; }
    public void setBathrooms(Integer bathrooms) { this.bathrooms = bathrooms; }
    public BigDecimal getPricePerNight() { return pricePerNight; }
    public void setPricePerNight(BigDecimal pricePerNight) { this.pricePerNight = pricePerNight; }
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getPostalCode() { return postalCode; }
    public void setPostalCode(String postalCode) { this.postalCode = postalCode; }
    public String getStreet() { return street; }
    public void setStreet(String street) { this.street = street; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Boolean getPetsAllowed() { return petsAllowed; }
    public void setPetsAllowed(Boolean petsAllowed) { this.petsAllowed = petsAllowed; }
    public List<String> getAmenities() { return amenities; }
    public void setAmenities(List<String> amenities) { this.amenities = amenities; }
    public List<MultipartFile> getImages() { return images; }
    public void setImages(List<MultipartFile> images) { this.images = images; }
}
