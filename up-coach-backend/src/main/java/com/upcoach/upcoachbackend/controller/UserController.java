package com.upcoach.upcoachbackend.controller;

import com.upcoach.upcoachbackend.enums.Role;
import com.upcoach.upcoachbackend.model.Client;
import com.upcoach.upcoachbackend.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class UserController {
    private final ClientService clientService;
    @PostMapping(path = "/create/client",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Client> createClient(@Valid @RequestBody Client client) throws Throwable {
        System.out.println(client);
        client.setRole(Role.CLIENT);
        return new ResponseEntity<>(
                clientService.createUser(client),
                HttpStatus.CREATED
        );
    }
}
