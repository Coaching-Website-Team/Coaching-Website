package com.upcoach.upcoachbackend.controller.controllerAdvice.implementation;

import com.upcoach.upcoachbackend.controller.controller.UserController;
import com.upcoach.upcoachbackend.controller.controllerAdvice.UserControllerAdvice;
import com.upcoach.upcoachbackend.dto.errorDTO.UserError;
import com.upcoach.upcoachbackend.exception.UserException;
import com.upcoach.upcoachbackend.controller.controller.UserController;
import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice(assignableTypes = UserController.class)
public class UserControllerAdviceImpl implements UserControllerAdvice {

    private static final Logger LOG = LoggerFactory.getLogger(UserControllerAdviceImpl.class);
    @ExceptionHandler(HibernateException.class)
    public ResponseEntity<UserError> handleException(
            HibernateException exception
    ) {
        return handleUserException(HttpStatus.BAD_REQUEST.value(), new UserException(exception));
    }
    
    

}
