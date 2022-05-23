package com.upcoach.upcoachbackend.controller.controllerAdvice.implementation;

import com.upcoach.upcoachbackend.controller.controller.ContractController;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.ControllerAdvice;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice(assignableTypes = ContractController.class)
public class ContractControllerAdvice {

}
