package com.company.repository;

import com.company.model.Product;
import com.company.model.Sale;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * Created by crys_ on 05.12.2017.
 */
@Repository
public class RepositorySale {
    private ArrayList<Sale> sales;

    public RepositorySale() {
        this.sales = new ArrayList<>();
    }

    public boolean addSale (String date, Product product, int quantity) {
    Sale sale = new Sale(date, product, quantity);
        sales.add(sale);
        return true;
    }

    public Sale getSale(String date) {
        for (Sale sale:sales) {
            if(sale.getDate().equals(date))
                return sale;
        }
        return null;
    }
    public ArrayList<Sale> getSales() {
        return sales;
    }
}
