package com.company.controller;

import com.company.model.Bill;
import com.company.model.Product;
import com.company.model.Sale;
import com.company.model.Stock;
import com.company.repository.RepositoryBill;
import com.company.repository.RepositorySale;
import com.company.repository.RepositoryStock;
import com.company.thread.MyThread;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.company.repository.RepositoryProduct;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadPoolExecutor;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by crys_ on 05.12.2017.
 */
@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    private RepositoryProduct repositoryProduct = new RepositoryProduct();
    @Autowired
    private RepositorySale repositorySale = new RepositorySale();
    @Autowired
    private RepositoryStock repositoryStock = new RepositoryStock();
    @Autowired
    private RepositoryBill repositoryBill = new RepositoryBill();
    @Autowired
    private MyThread myThread = new MyThread();
    @Autowired
    private ThreadPoolTaskExecutor threadPoolTaskExecutor = new ThreadPoolTaskExecutor();

@RequestMapping(value = "/", method = RequestMethod.GET)
    public @ResponseBody
    void startThread() {
    threadPoolTaskExecutor.execute(myThread);
}

@RequestMapping(value = "/sellProduct", method = RequestMethod.GET )
    public @ResponseBody
    String addAction(@RequestParam(value = "code") Integer code,
                      @RequestParam(value = "quantity") Integer quantity) {
    boolean result = repositoryProduct.buyProduct(code,quantity);
    if(result) {
    repositoryStock.removeStock(code, quantity);
    String date = new SimpleDateFormat("dd-MM-yyyy").format(new Date());
    repositorySale.addSale(date ,repositoryProduct.getProduct(code), quantity);
    repositoryBill.addBill("Vanzare din data" + date,repositorySale.getSale(date),repositoryProduct.getPrice(code,quantity));
    }
    return "Vanzare efectuata";
}

@RequestMapping(value = "/printAll", method = RequestMethod.GET)
    public @ResponseBody
    List<Product> printAll() {
    return repositoryProduct.getProducts();
}

    @RequestMapping(value = "/printProducts", method = RequestMethod.GET )
    public @ResponseBody
    ArrayList<Product> addAction() {
        return repositoryProduct.getProducts();
    }

    @RequestMapping(value = "/printStock", method = RequestMethod.GET )
    public @ResponseBody
    ArrayList<Stock> add() {
        return repositoryStock.getStocks();
    }

    @RequestMapping(value = "/printBill", method = RequestMethod.GET )
    public @ResponseBody
    ArrayList<Bill> printBill() {
        return repositoryBill.getBills();
    }

    @RequestMapping(value = "/printSale", method = RequestMethod.GET )
    public @ResponseBody
    ArrayList<Sale> printSale() {
        return repositorySale.getSales();
    }

    @RequestMapping(value = "/hello", method = POST )
    public @ResponseBody
    Boolean hello() {
       return true;
    }


}
