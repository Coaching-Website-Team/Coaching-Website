package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.model.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService<T extends User> {
}
