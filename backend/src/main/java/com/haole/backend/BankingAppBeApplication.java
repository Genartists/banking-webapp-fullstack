package com.haole.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@SpringBootApplication
@EntityScan(basePackages = "com.haole.backend.model")
public class BankingAppBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(BankingAppBeApplication.class, args);
    }

}
