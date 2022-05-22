package com.upcoach.upcoachbackend.controller;
import com.upcoach.upcoachbackend.dto.dataDto.CoachNotVDTO;
import com.upcoach.upcoachbackend.model.SuperUser;
import com.upcoach.upcoachbackend.service.CoachService;
import com.upcoach.upcoachbackend.service.SuperUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/superuser")
public class SuperUserController {

    SuperUserService superUserService;
    CoachService coachService;

    public SuperUserController(SuperUserService superUserService,
                               CoachService coachService) {
        this.superUserService = superUserService;
        this.coachService = coachService;
    }

    @GetMapping("/verifyCoach")
    public ResponseEntity<Void> verifyCoach(@RequestHeader("coach_id") long coach_id) {
        return new ResponseEntity<>(
                coachService.verifyCoach(coach_id)
        );
    }

    @GetMapping("/listNotVerified")
    public ResponseEntity<List<CoachNotVDTO>> listNotVerified() {
        return new ResponseEntity<>(
                coachService.listNotVerified(),
                HttpStatus.OK
        );
    }
    @GetMapping(value = "/me", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SuperUser> getPersonalData(){
        return new ResponseEntity<>(
                superUserService.findCurrentSuperUser(),
                HttpStatus.OK
        );
    }
}
