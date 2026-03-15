package com.example.validation;

import java.util.regex.Pattern;

public class UserAttributesValidator {

    private static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$";
    private static final String PASSWORD_REGEX = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$";
    private static final String USERNAME_REGEX = "^[a-zA-Z0-9._-]{3,}$";

    // Ime i prezime - samo slova i razmaci (uključujući naša slova), min 2 znaka
    private static final String NAME_REGEX = "^[a-zA-ZčćžšđČĆŽŠĐ\\s-]{2,}$";
    // Datum rođenja - format DD-MM-YYYY
    private static final String DOB_REGEX = "^\\d{1,2}[.-]\\d{1,2}[.-]\\d{4}$";
    // Broj telefona - može početi s +, i sadržavati brojeve, razmake i crtice, 9 do
    // 15 znakova
    private static final String PHONE_REGEX = "^\\+?[0-9\\s-]{9,15}$";

    private static final Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);
    private static final Pattern PASSWORD_PATTERN = Pattern.compile(PASSWORD_REGEX);
    private static final Pattern USERNAME_PATTERN = Pattern.compile(USERNAME_REGEX);
    private static final Pattern NAME_PATTERN = Pattern.compile(NAME_REGEX);
    private static final Pattern DOB_PATTERN = Pattern.compile(DOB_REGEX);
    private static final Pattern PHONE_PATTERN = Pattern.compile(PHONE_REGEX);

    public static boolean isValidEmail(String email) {
        if (email == null)
            return false;
        return EMAIL_PATTERN.matcher(email).matches();
    }

    public static boolean isValidPassword(String password) {
        if (password == null)
            return false;
        return PASSWORD_PATTERN.matcher(password).matches();
    }

    public static boolean isValidUsername(String username) {
        if (username == null)
            return false;
        return USERNAME_PATTERN.matcher(username).matches();
    }

    public static boolean isValidName(String name) {
        if (name == null)
            return false;
        return NAME_PATTERN.matcher(name).matches();
    }

    public static boolean isValidDateOfBirth(String dob) {
        if (dob == null)
            return false;
        return DOB_PATTERN.matcher(dob).matches();
    }

    public static boolean isValidPhoneNumber(String phone) {
        if (phone == null)
            return false;
        return PHONE_PATTERN.matcher(phone).matches();
    }
}
