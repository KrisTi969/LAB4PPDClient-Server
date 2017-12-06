package com.company.model;

/**
 * Created by crys_ on 05.12.2017.
 */
public class Bill {
    private String name;
    private Sale sale;
    private int total_sum;

    public Bill(String name, Sale sale, int total_sum) {
        this.name = name;
        this.sale = sale;
        this.total_sum = total_sum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Sale getSale() {
        return sale;
    }

    public void setSale(Sale sale) {
        this.sale = sale;
    }

    public int getTotal_sum() {
        return total_sum;
    }

    public void setTotal_sum(int total_sum) {
        this.total_sum = total_sum;
    }

    @Override
    public String toString() {
        return "Bill{" +
                "name='" + name + '\'' +
                ", sale=" + sale +
                ", total_sum=" + total_sum +
                '}';
    }
}
