package com.company.model;

/**
 * Created by crys_ on 05.12.2017.
 */
public class Sale {
    private String date;
    private Product product;
    private int quantity;

    public Sale(String date, Product product, int quantity) {
        this.date = date;
        this.product = product;
        this.quantity = quantity;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Sale{" +
                "date='" + date + '\'' +
                ", product=" + product +
                ", quantity='" + quantity + '\'' +
                '}';
    }
}
