package com.haole.backend.service;


import com.haole.backend.dto.RegisterRequest;
import com.haole.backend.model.Customers;
import com.haole.backend.model.Users;
import com.haole.backend.repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomersRepository customersRepository;

    public List<Customers> selectAllCustomer() {
        return customersRepository.findAll();
    }
    public Customers createCustomer(Users user, RegisterRequest request){
        Customers customer = new Customers();
        customer.setUser(user);
        customer.setFirstName(request.getFirstName());
        customer.setLastName(request.getLastName());
        customer.setAge(request.getAge());
        customer.setDateOfBirth(Date.valueOf(request.getDateOfBirth()));
        customer.setPhoneNumber(request.getPhoneNumber());
        customer.setAddress(request.getAddress());
        return customersRepository.save(customer);
    }
}
