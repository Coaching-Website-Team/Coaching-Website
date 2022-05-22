package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.dto.dataDto.ClientDTO;
import com.upcoach.upcoachbackend.dto.dataDto.CoachDTO;
import com.upcoach.upcoachbackend.dto.dataDto.CoachNotVDTO;
import com.upcoach.upcoachbackend.enums.CoachDocuments;
import com.upcoach.upcoachbackend.enums.Role;
import com.upcoach.upcoachbackend.exception.CoachNotFoundException;
import com.upcoach.upcoachbackend.model.Client;
import com.upcoach.upcoachbackend.model.Coach;
import com.upcoach.upcoachbackend.repository.CoachRepository;
import com.upcoach.upcoachbackend.repository.UserRepository;
import com.upcoach.upcoachbackend.security.JwtLogin;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional

public class CoachService extends UserService<Coach>{

    CoachRepository coachRepository;
    private FileService fileService;

    public CoachService(CoachRepository coachRepository, EmailSenderService emailSenderService,
                        PasswordEncoder passwordEncoder, @Lazy FileService fileService) {
        super(coachRepository, emailSenderService, passwordEncoder);
        this.coachRepository = coachRepository;
        this.fileService = fileService;
    }

//    @Autowired
//    public void setFileService(FileService fileService) {
//        this.fileService = fileService;
//    }

    public boolean exists(Coach coach) {
        if (Objects.isNull(coach)) {
            return false;
        }
        return userRepository.existsById(coach.getId());
    }
    public Coach findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public Coach findById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void setCoachDocument(@NotNull Coach coach, @NotNull CoachDocuments coachDocument,@NotNull String documentPath) {
        if (coachDocument == CoachDocuments.IDENTITY_DOCUMENT) {
            coach.setIdentityDocument(documentPath);
        }else if (coachDocument == CoachDocuments.COACHING_CERTIFICATE) {
            coach.setCoachingCertificate(documentPath);
        }else if (coachDocument == CoachDocuments.IMAGE){
            coach.setImage(documentPath);
        }else {
            throw new IllegalArgumentException("Invalid document type");
        }
        userRepository.save(coach);
    }

    public List<ClientDTO> getCoachsClients(String jwtToken) {
        String email = JwtLogin.getEmailFromJwtToken(jwtToken);
        Coach coach = getUserWithEmail(email);
        return coachRepository.findClientByCoach(coach.getId()).stream().map(
                (Client c) -> {
                    return new ClientDTO(
                            c.getId(),
                            c.getFirstName() + " " + c.getLastName()
                    );
                }
        ).collect(Collectors.toList());
    }

    public Coach createCoach(CoachDTO coachDto) throws IOException, NoSuchAlgorithmException {
        Coach coach = new Coach(
                coachDto.firstName(),
                coachDto.lastName(),
                coachDto.birth_date(),
                Role.COACH,
                coachDto.email(),
                coachDto.password(),
                false,
                null,
                null,
                null,
                null,
                null
        );
        createUser(coach);
        fileService.uploadCoachDocuments(coach,coachDto.coachingCertificate(),CoachDocuments.COACHING_CERTIFICATE);
        fileService.uploadCoachDocuments(coach,coachDto.identityDocument(),CoachDocuments.IDENTITY_DOCUMENT);
        fileService.uploadCoachDocuments(coach,coachDto.image(),CoachDocuments.IMAGE);
        return coach;
    }

    public HttpStatus verifyCoach(long coach_id) {
        Coach coach = getUserWithId(coach_id);
        coach.setVerified(true);
        coachRepository.save(coach);
        return HttpStatus.OK;
    }

    public Coach findCurrentCoach() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Coach> coach = coachRepository.findByEmail(email);
        if (coach.isPresent())
            return coach.get();
        throw new CoachNotFoundException(email);
    }

    public List<CoachNotVDTO> listNotVerified() {
        return coachRepository.findCoachByVerified(false).stream().map(
                coach -> new CoachNotVDTO(coach.getId(),
                        coach.getFirstName() + " " + coach.getLastName(),
                        coach.getCoachingCertificate(),
                        coach.getIdentityDocument(),
                        coach.getImage())
        ).collect(Collectors.toList());
    }
}
