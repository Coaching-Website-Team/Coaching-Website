package com.upcoach.upcoachbackend.service;
import com.upcoach.upcoachbackend.exception.UserNotFoundException;
import com.upcoach.upcoachbackend.model.SuperUser;
import com.upcoach.upcoachbackend.repository.SuperUserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional

public class SuperUserService extends UserService<SuperUser> {
    public SuperUserService(SuperUserRepository superUserRepository, EmailSenderService emailSenderService, PasswordEncoder passwordEncoder) {
        super(superUserRepository, emailSenderService, passwordEncoder);
    }

    public SuperUser findCurrentSuperUser() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<SuperUser> admin = userRepository.findByEmail(email);
        if (admin.isPresent())
            return admin.get();
        throw new UserNotFoundException(email);
    }
}
