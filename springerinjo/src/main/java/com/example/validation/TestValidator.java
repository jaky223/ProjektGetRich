package com.example.validation;

public class TestValidator {
    public static void main(String[] args) {
        System.out.println("Username (sbicak20): " + UserAttributesValidator.isValidUsername("sbicak20"));
        System.out.println("Password (Testlozinka123): " + UserAttributesValidator.isValidPassword("Testlozinka123"));
        System.out.println("FirstName (sebast): " + UserAttributesValidator.isValidName("sebast"));
        System.out.println("LastName (prezime): " + UserAttributesValidator.isValidName("prezime"));
        System.out.println("Email (sebastijan.bicak@gmail.com): " + UserAttributesValidator.isValidEmail("sebastijan.bicak@gmail.com"));
        System.out.println("DOB (11.03.2025): " + UserAttributesValidator.isValidDateOfBirth("11.03.2025"));
        System.out.println("Phone (0919737491): " + UserAttributesValidator.isValidPhoneNumber("0919737491"));
    }
}
