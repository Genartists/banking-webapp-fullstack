package com.haole.backend.model;

import jakarta.persistence.*;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String username;
    private String password;
    private String email;


    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Customers customer;

    public Users(Integer userId, String username, String password, String email, Date createdDate) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}