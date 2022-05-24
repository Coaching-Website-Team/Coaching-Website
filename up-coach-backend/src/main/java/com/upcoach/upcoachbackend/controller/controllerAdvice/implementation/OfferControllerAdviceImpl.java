package com.upcoach.upcoachbackend.controller.controllerAdvice.implementation;

import com.upcoach.upcoachbackend.controller.controller.OfferController;
import com.upcoach.upcoachbackend.controller.controllerAdvice.OfferControllerAdvice;
import com.upcoach.upcoachbackend.dto.errorDTO.OfferError;
import com.upcoach.upcoachbackend.exception.CoachIsNotVerifiedException;
import com.upcoach.upcoachbackend.exception.OfferNotFoundException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice(assignableTypes = {OfferController.class})
public class OfferControllerAdviceImpl implements OfferControllerAdvice {
    @ExceptionHandler(CoachIsNotVerifiedException.class)
    public ResponseEntity<OfferError> handleException(
            CoachIsNotVerifiedException exception
    ) {

        return handleOfferException(HttpStatus.BAD_REQUEST.value(), exception);
    }
    @ExceptionHandler(OfferNotFoundException.class)
    public ResponseEntity<OfferError> handleException(
            OfferNotFoundException exception
    ) {
        return handleOfferException(HttpStatus.BAD_REQUEST.value(), exception);
    }
}
