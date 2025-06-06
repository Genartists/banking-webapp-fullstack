package com.haole.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BankAccounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer accountId;
    private Integer accountNumber;
    private String accountType;
    private Double currentBalance;
    private Date dateOpen;
    private Date dateClose;
    private String accountStatus;

    public BankAccounts(Integer accountNumber, String accountType, Double currentBalance, Date dateOpen, Date dateClose, String accountStatus) {
        this.accountId = accountId;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.currentBalance = currentBalance;
        this.dateOpen = dateOpen;
        this.dateClose = dateClose;
        this.accountStatus = accountStatus;
    }
}
