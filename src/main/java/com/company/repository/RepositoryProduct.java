package com.company.repository;

import com.company.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * Created by crys_ on 05.12.2017.
 */
@Repository
public class RepositoryProduct {
    private ArrayList<Product> products;

    public RepositoryProduct() {
        this.products = new ArrayList<Product>();
        Product product = new Product("Samsung Galaxy S3", 1, 4000, 50, "bucata");
        Product product1 = new Product("LENOVO P@", 2, 1500, 75, "bucata");
        Product product2 = new Product("MOTOROLA XPIX", 3, 2500, 28, "bucata");
        Product product3 = new Product("NOKIA DEALA VECHI", 4, 100, 1000, "bucata");
        Product product4 = new Product("ASUS ZONFONE 3", 4, 1500, 100, "bucata");
        products.add(product);
        products.add(product1);
        products.add(product2);
        products.add(product3);
        products.add(product4);
    }

    public boolean buyProduct(int code, int quantity) {
        for (Product prod: products) {
            if(prod.getCode()==code && prod.getQuantity() >= 0) {
                prod.setQuantity(prod.getQuantity()-quantity);
                return true;
            }
        }
    return false;
    }

    public Product getProduct(int code) {
        for (Product prod: products) {
            if(prod.getCode()==code){
                return prod;
            }
        }
        return null;
    }

    public int getPrice(int code,int quantity) {
        for (Product prod : products) {
            if (prod.getCode()==code) {
                int calcul = prod.getPrice() * quantity;
                return calcul;
            }
        }
        return -1;
    }
    public ArrayList<Product> getProducts () {
        return products;
    }
}