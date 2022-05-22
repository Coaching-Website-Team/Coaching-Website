package com.upcoach.upcoachbackend.service;
import com.upcoach.upcoachbackend.exception.OfferNotFoundException;
import com.upcoach.upcoachbackend.model.Client;
import com.upcoach.upcoachbackend.model.Contract;
import com.upcoach.upcoachbackend.repository.ContractRepository;
import com.upcoach.upcoachbackend.security.JwtLogin;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional

public class ContractService<T extends Contract> {

    ContractRepository<T> contractRepository;
    ClientService clientService;
    public ContractService(ContractRepository<T> contractRepository, ClientService clientService) {
        this.contractRepository = contractRepository;
        this.clientService = clientService;
    }

    public T createContract(T contract, String jwtToken) {
        if (contract.getOffer() == null) throw new OfferNotFoundException("422", "offer was not given");
        String email = JwtLogin.getEmailFromJwtToken(jwtToken);
        Client user = clientService.getUserWithEmail(email);
        contract.setClient(user);
        contract.setAcceptanceDate(new Date());
        contract.setPaid(false);
        return contractRepository.save(contract);
    }
}
