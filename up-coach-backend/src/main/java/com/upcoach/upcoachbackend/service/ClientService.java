package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.model.Client;
import com.upcoach.upcoachbackend.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ClientService extends UserService<Client>{
    public ClientService(UserRepository<Client> userRepository) {
        super(userRepository);
    }
}
