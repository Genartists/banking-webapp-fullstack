package com.haole.backend.controller;

import com.haole.backend.model.Customers;
import com.haole.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/customerInfo")
    public List<Customers> displayAllCustomer() {
        return customerService.selectAllCustomer();
    }
}
