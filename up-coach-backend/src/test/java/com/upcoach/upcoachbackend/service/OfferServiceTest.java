package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.dto.dataDto.OfferRequestDTO;
import com.upcoach.upcoachbackend.model.Coach;
import com.upcoach.upcoachbackend.model.Offer;
import com.upcoach.upcoachbackend.repository.OfferRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;

import javax.persistence.EntityManager;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class OfferServiceTest {

    @Mock private OfferRepository offerRepository;
    @Mock private CoachService coachService;
    @Mock private FileService fileService;

    @Mock private EntityManager entityManager;
    @MockBean
    AuthenticationManager authenticationManager;


    private OfferService underTest;

    @BeforeEach
    void setUp() {
        underTest = new OfferService(offerRepository,coachService,fileService,entityManager);
    }

    @Test
    @Disabled
    void addOffer() throws IOException, NoSuchAlgorithmException {
        //Given
        OfferRequestDTO offerDTO = new OfferRequestDTO(
                "offer",
                "title",
                "description",
                15,
                100,
                null
        );
        //When
        underTest.addOffer(offerDTO);
        //Then
        ArgumentCaptor<Offer> offerArgumentCaptor = ArgumentCaptor.forClass(Offer.class);
        verify(offerRepository).save(offerArgumentCaptor.capture());
        Offer capturedOffer = offerArgumentCaptor.getValue();

    }

    @Test
    void getOffersByTags() {
        //given
        List<String> tags = List.of("a1","a2");
        //when
        underTest.getOffersByTags(tags);
        //then
        verify(offerRepository).findAllByTagsIn(tags);

    }

    @Test
    void getOffersByCoach() {
        //given
        Coach coach = new Coach();
        coach.setId(100L);
        //when
        underTest.getOffersByCoach(coach);
        //then
        verify(offerRepository).findAllByCoachId(coach.getId());
    }

    @Test
    @Disabled
    void getOffersByTitle() throws InterruptedException {
        //given
        String title= "title";

        //when
        underTest.getOffersByTitle(title);
        //then

    }

    @Test
    void deleteOffer() {
    }

    @Test
    void getOfferDtoById() {
    }

    @Test
    void getOfferById() {
    }

    @Test
    void setOfferImage() {
    }

    @Test
    void getAllOffers() {
    }
}