package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.dto.dataDto.CoachDTO;
import com.upcoach.upcoachbackend.exception.UserAlreadyExistsException;
import com.upcoach.upcoachbackend.exception.UserNotFoundException;
import com.upcoach.upcoachbackend.model.Client;
import com.upcoach.upcoachbackend.model.User;
import com.upcoach.upcoachbackend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService<T extends User> {
    protected UserRepository<T> userRepository;
    protected PasswordEncoder passwordEncoder;
    protected EmailSenderService emailSenderService;


    public UserService(UserRepository<T> userRepository, EmailSenderService emailSenderService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.emailSenderService = emailSenderService;
        this.passwordEncoder = passwordEncoder;
    }
    public T createUser(T user){
        if (userRepository.existsByEmail(user.getEmail())) throw new UserAlreadyExistsException(user.getEmail());
        user.setActive(true);
        user.setPassword(passwordEncoder.encode(user.getPassword())); // TODO : encode password -- needs security package
        return (T) this.userRepository.save(user);
    }

    public T getUserWithEmail(String email){
        return (T) this.userRepository.findByEmail(email).orElseThrow( () ->  new UserNotFoundException(email));
    }
    public T getUserWithId(long id) {
        return (T) this.userRepository.findById(id).orElseThrow( () ->  new UserNotFoundException(id));
    }
}
