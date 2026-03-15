package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DbCheck {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/getrich_db", "postgres", "postgres");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM users");
        boolean found = false;
        while(rs.next()) {
            found = true;
            System.out.println("FOUND-USER: " + rs.getString("username") + ", Email: " + rs.getString("email"));
        }
        if (!found) {
            System.out.println("NO USERS FOUND IN DB.");
        }
        conn.close();
    }
}
