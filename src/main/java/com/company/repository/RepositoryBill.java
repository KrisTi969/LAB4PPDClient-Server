package com.company.repository;

import com.company.model.Bill;
import com.company.model.Sale;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * Created by crys_ on 05.12.2017.
 */
@Repository
public class RepositoryBill {
    private ArrayList<Bill> bills;

    public RepositoryBill() {
        this.bills = new ArrayList<Bill>();
    }

    public Boolean addBill(String name, Sale sale, int total_sum){
    Bill bill = new Bill(name, sale, total_sum);
    bills.add(bill);
    return true;
    }

    public ArrayList<Bill> getBills () {
        return bills;
    }
}
