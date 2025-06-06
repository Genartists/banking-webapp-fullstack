package com.haole.backend.service;

import com.haole.backend.dto.RegisterRequest;
import com.haole.backend.model.Users;
import com.haole.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Users createUsers(String username, String email, String password) {
        Users user = new Users();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);

        return userRepository.save(user);
    }

}
