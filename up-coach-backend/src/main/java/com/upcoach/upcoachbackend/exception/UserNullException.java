package com.upcoach.upcoachbackend.exception;

import com.upcoach.upcoachbackend.enums.Role;

public class UserNullException extends UserException{
    public UserNullException(Role role) {
        super(UserNullException.class.getSimpleName(), "expected a "+role.name()+", found : null");
    }
    public UserNullException() {
        super(UserNullException.class.getSimpleName(), "expected a user, found : null");
    }
}
