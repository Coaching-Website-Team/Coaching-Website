package com.upcoach.upcoachbackend.security;

import com.upcoach.upcoachbackend.enums.Role;
import com.upcoach.upcoachbackend.enums.SuperUserAuthority;
import com.upcoach.upcoachbackend.model.SuperUser;
import com.upcoach.upcoachbackend.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserPrincipal implements UserDetails {

    private User user;

    public UserPrincipal(User user) {this.user = user;}

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole().name().toUpperCase()));
        if (user.getRole() == Role.SUPERUSER) {
            List<SuperUserAuthority> authorities = ((SuperUser) user).getAuthorities();
            authorities.forEach(p ->
                    grantedAuthorities.add(new SimpleGrantedAuthority(p.name().toUpperCase()))
            );
        }
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return user.isActive();
    }

    @Override
    public boolean isAccountNonLocked() {
        return user.isActive();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return user.isActive();
    }

    @Override
    public boolean isEnabled() {
        return user.isActive();
    }
}
