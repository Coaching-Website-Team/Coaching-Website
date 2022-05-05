package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.model.Client;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ClientService extends UserService<Client>{
}
