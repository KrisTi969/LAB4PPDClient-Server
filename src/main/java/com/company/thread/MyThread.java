package com.company.thread;

import com.company.repository.RepositoryBill;
import com.company.repository.RepositoryProduct;
import com.company.repository.RepositorySale;
import com.company.repository.RepositoryStock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

@Component
@Scope("prototype")
public class MyThread implements Runnable{
    @Autowired
    private RepositoryProduct repositoryProduct = new RepositoryProduct();
    @Autowired
    private RepositorySale repositorySale = new RepositorySale();
    @Autowired
    private RepositoryStock repositoryStock = new RepositoryStock();
    @Autowired
    private RepositoryBill repositoryBill = new RepositoryBill();


    String name;
    public void setName(String name){
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println(name + " is running");
        Random r = new Random();
        int Low = 1;
        int High = 4;
        int Result = r.nextInt(High-Low) + Low;

        Random quantity = new Random();
        int Low1 = 1;
        int High1 = 10;
        int Result2 = quantity.nextInt(High1-Low1) + Low1;
        try {
            boolean result = repositoryProduct.buyProduct(Result, Result2);
            if (result) {
                repositoryStock.removeStock(Result, Result2);
                String date = new SimpleDateFormat("dd-MM-yyyy").format(new Date());
                repositorySale.addSale(date, repositoryProduct.getProduct(Result), Result2);
                repositoryBill.addBill("Vanzare din data" + date, repositorySale.getSale(date), repositoryProduct.getPrice(Result, Result2));
                Thread.sleep(5000);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(name + " is running");
    }

}