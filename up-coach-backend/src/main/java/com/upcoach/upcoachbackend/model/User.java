package com.upcoach.upcoachbackend.model;


import com.upcoach.upcoachbackend.enums.Role;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Objects;

@Entity
@Inheritance
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull(message = "firstName must not be null")
    @NotEmpty(message = "firstName must not be an empty string")
    private String firstName;

    @NotNull(message = "lastName must not be null")
    @NotEmpty(message = "lastName must not be an empty string")
    private String lastName;

    @Column(nullable = false)
    private Date birth_date;

    @Enumerated(EnumType.STRING)
    private Role role;

    @NotNull(message = "Email must not be null")
    @Column(name = "email", unique = true)
    @javax.validation.constraints.Email(message = "not an email")
    private String email;

    @NotNull(message = "password must not be null")
    @NotEmpty(message = "password must not be an empty string")
    private String password;

    @Column(name = "isActive", columnDefinition = "BOOLEAN default TRUE")
    private boolean isActive;

    public User() {
    }
    public User(String firstName, String lastName, Date birth_date,
                Role role, String email, String password) {
        isActive = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth_date = birth_date;
        this.role = role;
        this.email = email;
        this.password = password;

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birth_date=" + birth_date +
                ", role=" + role +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", isActive=" + isActive +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
