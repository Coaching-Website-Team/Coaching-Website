package com.upcoach.upcoachbackend.dto.errorDTO;


import com.upcoach.upcoachbackend.exception.GeneralException;

public record ExceptionJsonFormatter(String code, String message) {
    public static ExceptionJsonFormatter convertExceptionToJson(GeneralException exception) {
        return new ExceptionJsonFormatter(exception.getCode(), exception.getMessage());
    }
}
