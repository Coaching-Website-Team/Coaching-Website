package com.upcoach.upcoachbackend.controller;

import com.upcoach.upcoachbackend.dto.dataDto.CoachDTO;
import com.upcoach.upcoachbackend.enums.Role;
import com.upcoach.upcoachbackend.model.Client;
import com.upcoach.upcoachbackend.model.Coach;
import com.upcoach.upcoachbackend.service.ClientService;
import com.upcoach.upcoachbackend.service.CoachService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class UserController {
    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);
    private final ClientService clientService;
    private final CoachService coachService;
    @PostMapping(path = "/create/client",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Client> createClient(@Valid @RequestBody Client client) {
        System.out.println(client);
        client.setRole(Role.CLIENT);
        return new ResponseEntity<>(
                clientService.createUser(client),
                HttpStatus.CREATED
        );
    }
    @PostMapping(path = "/create/coach",
            consumes="multipart/form-data",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Coach> createCoach(@ModelAttribute @Valid CoachDTO coach) throws Throwable {
        LOG.debug("new /create/coach request : "+coach.email());
        return new ResponseEntity<>(
                coachService.createCoach(coach),
                HttpStatus.CREATED
        );
    }

}
