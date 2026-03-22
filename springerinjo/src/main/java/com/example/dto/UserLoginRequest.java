package com.example.dto;

import jakarta.validation.constraints.NotBlank;

public class UserLoginRequest {
    private String username;
    private String email;
    @NotBlank(message = "Lozinka ne smije biti prazna.")
    private String password;
    private String token;

    public UserLoginRequest() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
