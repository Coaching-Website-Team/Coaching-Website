package com.upcoach.upcoachbackend.controller;


import com.upcoach.upcoachbackend.dto.dataDto.TrainingContractDTO;
import com.upcoach.upcoachbackend.model.Contract;
import com.upcoach.upcoachbackend.model.MealContract;
import com.upcoach.upcoachbackend.model.TrainingContract;
import com.upcoach.upcoachbackend.service.ContractService;
import com.upcoach.upcoachbackend.service.MealContractService;
import com.upcoach.upcoachbackend.service.OfferService;
import com.upcoach.upcoachbackend.service.TrainingContractService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/contract")
public class ContractController {

    ContractService contractService;
    TrainingContractService trainingContractService;
    MealContractService mealContractService;
    OfferService offerService;

    public ContractController(ContractService contractService,
                              TrainingContractService trainingContractService,
                              MealContractService mealContractService,
                              OfferService offerService) {
        this.contractService = contractService;
        this.trainingContractService = trainingContractService;
        this.mealContractService = mealContractService;
        this.offerService = offerService;
    }

    @PostMapping(path = "/acceptTrainingContract")
    public ResponseEntity<TrainingContractDTO> acceptTrainingContract(@RequestBody TrainingContractDTO contractDTO,
                                                                   @RequestHeader("Authorization") String jwtToken) {
        Contract contract = new TrainingContract();
        contract.setPaid(contractDTO.paid());
        contract.setOffer(offerService.getOfferById(contractDTO.offer_id()));
        contract.setPrice(contractDTO.price());
        return new ResponseEntity<>(
                trainingContractService.createTrainingContract((TrainingContract) contract, jwtToken),
                HttpStatus.OK
        );
    }

    @PostMapping(path = "/createMealContract")
    public ResponseEntity<MealContract> acceptMealContract(@RequestBody MealContract contract,
                                                           @RequestHeader("Authorization") String jwtToken) {
        return new ResponseEntity<>(
                mealContractService.createContract(contract, jwtToken),
                HttpStatus.OK
        );
    }
}
