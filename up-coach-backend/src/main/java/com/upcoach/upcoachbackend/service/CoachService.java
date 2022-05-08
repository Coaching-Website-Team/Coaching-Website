package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.dto.dataDto.CoachDTO;
import com.upcoach.upcoachbackend.enums.CoachDocuments;
import com.upcoach.upcoachbackend.enums.Role;
import com.upcoach.upcoachbackend.exception.CoachNotFoundException;
import com.upcoach.upcoachbackend.model.Coach;
import com.upcoach.upcoachbackend.repository.CoachRepository;
import com.upcoach.upcoachbackend.repository.UserRepository;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@Service
@Transactional
public class CoachService extends UserService<Coach>{

    CoachRepository coachRepository;
    private FileService fileService;
    public CoachService(CoachRepository coachRepository,  @Lazy FileService fileService) {
        super(coachRepository);
        this.fileService = fileService;
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
        fileService.uploadCoachDocuments(coach,coachDto.coachingCertificate(), CoachDocuments.COACHING_CERTIFICATE);
        fileService.uploadCoachDocuments(coach,coachDto.identityDocument(),CoachDocuments.IDENTITY_DOCUMENT);
        fileService.uploadCoachDocuments(coach,coachDto.image(),CoachDocuments.IMAGE);
        return coach;
    }
    public void setCoachDocument(@NotNull Coach coach, @NotNull CoachDocuments coachDocument, @NotNull String documentPath) {
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

    public Coach findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public Coach findCurrentCoach() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Coach> coach = coachRepository.findByEmail(email);
        if (coach.isPresent())
            return coach.get();
        throw new CoachNotFoundException(email);
    }

}
