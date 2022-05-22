package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.model.Client;
import com.upcoach.upcoachbackend.repository.ClientRepository;
import com.upcoach.upcoachbackend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ClientService extends UserService<Client>{
    ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository, EmailSenderService emailSenderService, PasswordEncoder passwordEncoder) {
        super(clientRepository, emailSenderService, passwordEncoder);
        this.clientRepository = clientRepository;
    }
}
