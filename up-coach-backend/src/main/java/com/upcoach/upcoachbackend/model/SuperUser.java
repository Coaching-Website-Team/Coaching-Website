package com.upcoach.upcoachbackend.model;


import  com.upcoach.upcoachbackend.enums.Role;
import com.upcoach.upcoachbackend.enums.SuperUserAuthority;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
public class SuperUser extends User{

    @ElementCollection(targetClass = SuperUserAuthority.class, fetch = FetchType.EAGER)
    @Column(name = "authorities")
    @NotNull(message = "Authorities cannot be null")
    @Enumerated(EnumType.STRING)
    private List<SuperUserAuthority> authorities;

    public SuperUser(String first_name, String last_name, Date birth_date,
                     String email, String password,
                     List<SuperUserAuthority> authorities) {
        super(first_name, last_name, birth_date, Role.SUPERUSER, email, password);
        this.authorities = authorities;
    }

    public SuperUser(String first_name, String last_name, Date birth_date,
                     String email, String password) {
        super(first_name, last_name, birth_date, Role.SUPERUSER, email, password);

    }

    public SuperUser() {}

    public List<SuperUserAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<SuperUserAuthority> authorities) {
        this.authorities = authorities;
    }
}

