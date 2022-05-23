package com.upcoach.upcoachbackend.controller.controllerAdvice;

import com.upcoach.upcoachbackend.dto.errorDTO.UserError;
import com.upcoach.upcoachbackend.exception.GeneralException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.Instant;

import static com.upcoach.upcoachbackend.dto.errorDTO.ExceptionJsonFormatter.convertExceptionToJson;

public interface UserControllerAdvice extends ControllerAdvice{
    default <E extends GeneralException> ResponseEntity<UserError> handleUserException(
            int statusCode, E exception) {

        LOG.debug("error response {}", exception.getMessage());
        UserError err = new UserError(
                HttpStatus.resolve(statusCode),
                Instant.now(),
                convertExceptionToJson(exception)
        );
        return ResponseEntity
                .status(statusCode)
                .body(err);
    }
}
