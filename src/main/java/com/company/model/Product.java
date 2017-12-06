package com.company.model;

/**
 * Created by crys_ on 05.12.2017.
 */
public class Product {
    private String name;//
    private int code;//
    private int price;
    private int quantity;//
    private String measure_unit;

    public Product () {};
    public Product(String name, int code, int price, int quantity, String measure_unit) {
        this.name = name;
        this.code = code;
        this.price = price;
        this.quantity = quantity;
        this.measure_unit = measure_unit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public String getMeasure_unit() {
        return measure_unit;
    }

    public void setMeasure_unit(String measure_unit) {
        this.measure_unit = measure_unit;
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", code='" + code + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", measure_unit='" + measure_unit + '\'' +
                '}';
    }
}
