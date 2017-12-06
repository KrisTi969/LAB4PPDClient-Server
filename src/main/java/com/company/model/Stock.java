package com.company.model;

/**
 * Created by crys_ on 05.12.2017.
 */
public class Stock {
    private int cod;
    private int quantity;

    public Stock(int stock, int quantity) {
        this.cod = stock;
        this.quantity = quantity;
    }

    public int getCod() {
        return cod;
    }

    public void setCod(int cod) {
        this.cod = cod;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "cod='" + cod + '\'' +
                ", quantity='" + quantity + '\'' +
                '}';
    }
}
