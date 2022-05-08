package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.dto.dataDto.CoachDTO;
import com.upcoach.upcoachbackend.exception.UserAlreadyExistsException;
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
    public UserService(UserRepository<T> userRepository) {
        this.userRepository = userRepository;
    }
    public T createUser(T user){
        if (userRepository.existsByEmail(user.getEmail())) throw new UserAlreadyExistsException(user.getEmail());
        user.setActive(true);
        user.setPassword(user.getPassword()); // TODO : encode password -- needs security package
        return (T) this.userRepository.save(user);
    }
}
