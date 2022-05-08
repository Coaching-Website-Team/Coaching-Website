package com.upcoach.upcoachbackend.repository;

import com.upcoach.upcoachbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository<T extends User> extends JpaRepository<T, Long> {
    boolean existsByEmail(String email);
    Optional<T> findByEmail(String email);
}
