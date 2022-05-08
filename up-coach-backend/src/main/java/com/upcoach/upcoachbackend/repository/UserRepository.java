package com.upcoach.upcoachbackend.repository;

import com.upcoach.upcoachbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository<T extends User> extends JpaRepository<T, Long> {
    boolean existsByEmail(String email);
}
