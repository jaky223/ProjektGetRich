package com.example.databasexpo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.username = :username")
    Optional<User> findByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.username = :username AND u.password = :password")
    Optional<User> findByUsernameAndPassword(String username, String password);

    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
    Optional<User> findByEmailAndPassword(String email, String password);

}