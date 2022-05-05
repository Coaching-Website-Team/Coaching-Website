package com.upcoach.upcoachbackend.service;

import com.upcoach.upcoachbackend.model.Coach;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CoachService extends UserService<Coach>{
}
