package com.upcoach.upcoachbackend.model;

import com.upcoach.upcoachbackend.enums.Role;
import com.upcoach.upcoachbackend.enums.Speciality;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Client extends User{
    @ElementCollection(targetClass = Speciality.class)
    @Column(name = "interests")
    @Enumerated(EnumType.STRING)
    private List<Speciality> interests;

    public Client(String first_name, String last_name, Date birth_date,
                  String email, String password,
                  List<Speciality> interests) {
        super(first_name, last_name, birth_date, Role.CLIENT, email, password);
        this.interests = interests;
    }
    @ElementCollection(targetClass = DietPlan.class)
    @Column(name = "diet_plans")
    private List<DietPlan> dietPlans;

    /**
     * path to image of client
     */
    private String image;

    public Client() {

    }

    public List<Speciality> getInterests() {
        return interests;
    }

    public void setInterests(List<Speciality> interests) {
        this.interests = interests;
    }

    public List<DietPlan> getDietPlans() {
        return dietPlans;
    }

    public void setDietPlans(List<DietPlan> dietPlans) {
        this.dietPlans = dietPlans;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Client(String firstName, String lastName, Date birth_date, Role role, String email, String password, List<Speciality> interests, List<DietPlan> dietPlans) {
        super(firstName, lastName, birth_date, role, email, password);
        this.interests = interests;
        this.dietPlans = dietPlans;
    }

    public Client(String firstName, String lastName, Date birth_date, Role role, String email, String password, List<Speciality> interests, List<DietPlan> dietPlans, String image) {
        super(firstName, lastName, birth_date, role, email, password);
        this.interests = interests;
        this.dietPlans = dietPlans;
        this.image = image;
    }
}
