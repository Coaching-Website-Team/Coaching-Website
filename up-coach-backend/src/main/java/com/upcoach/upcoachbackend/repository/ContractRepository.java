package com.upcoach.upcoachbackend.repository;

import com.upcoach.upcoachbackend.model.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository<T extends Contract> extends JpaRepository<T, Long> {
}
