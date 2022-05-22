package com.upcoach.upcoachbackend.service;
import com.upcoach.upcoachbackend.model.MealContract;
import com.upcoach.upcoachbackend.repository.ContractRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional

public class MealContractService extends ContractService<MealContract> {
    public MealContractService(ContractRepository<MealContract> contractRepository, ClientService clientService) {
        super(contractRepository, clientService);
    }
}
