package com.upcoach.upcoachbackend.controller.controllerAdvice;

import com.upcoach.upcoachbackend.dto.errorDTO.OfferError;
import com.upcoach.upcoachbackend.exception.GeneralException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.Instant;

import static com.upcoach.upcoachbackend.dto.errorDTO.ExceptionJsonFormatter.convertExceptionToJson;


public interface OfferControllerAdvice extends ControllerAdvice{
    default <E extends GeneralException> ResponseEntity<OfferError> handleOfferException(
            int statusCode, E exception) {

        LOG.debug("error response {}", exception.getMessage());
        OfferError err = new OfferError(
                HttpStatus.resolve(statusCode),
                Instant.now(),
                convertExceptionToJson(exception)
        );
        return ResponseEntity
                .status(statusCode)
                .body(err);
    }
}
