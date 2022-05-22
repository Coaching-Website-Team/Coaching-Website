package com.upcoach.upcoachbackend.service;
import com.upcoach.upcoachbackend.dto.dataDto.TrainingContractDTO;
import com.upcoach.upcoachbackend.model.TrainingContract;
import com.upcoach.upcoachbackend.repository.ContractRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional

public class TrainingContractService extends ContractService<TrainingContract> {
    public TrainingContractService(ContractRepository<TrainingContract> contractRepository, ClientService clientService) {
        super(contractRepository, clientService );
    }

    public TrainingContractDTO createTrainingContract(TrainingContract contract, String jwtToken) {
        TrainingContract tContract =  super.createContract(contract, jwtToken);
        return new TrainingContractDTO(
                contract.getId(),
                contract.getOffer().getId(),
                contract.getOffer().getTitle(),
                contract.getClient().getId(),
                contract.getClient().getFirstName() + " " + contract.getClient().getLastName(),
                contract.getPrice(),
                contract.isPaid(),
                tContract.getDuration(),
                tContract.getDaysInWeek(),
                tContract.getHoursInDay());
    }
}
