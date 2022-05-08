package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.model.Coach;
import com.upcoach.upcoachbackend.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CoachService extends UserService<Coach>{
    public CoachService(UserRepository<Coach> userRepository) {
        super(userRepository);
    }
}
