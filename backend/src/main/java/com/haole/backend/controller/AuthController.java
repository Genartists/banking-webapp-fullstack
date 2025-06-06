package com.haole.backend.controller;

import com.haole.backend.dto.LoginRequest;
import com.haole.backend.dto.RegisterRequest;
import com.haole.backend.model.Users;
import com.haole.backend.service.CustomerService;
import com.haole.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    @Transactional
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        Users user = userService.createUsers(request.getUsername(), request.getEmail(), request.getPassword());

        customerService.createCustomer(user, request);

        return ResponseEntity.ok("Register Successful");
    }

    @PostMapping("/login")
    @Transactional
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Users username = userService.findByUsername(request.getUsername());
        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Username don't exist, please register");
        }
        return ResponseEntity.ok(Map.of("message", "Login successful"));
    }
}
