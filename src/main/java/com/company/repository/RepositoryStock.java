package com.company.repository;

import com.company.model.Stock;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * Created by crys_ on 05.12.2017.
 */
@Repository
public class RepositoryStock {
    private ArrayList<Stock> stocks;

    public RepositoryStock () {
        this.stocks = new ArrayList<Stock>();
        Stock stock = new Stock(1, 50);
        Stock stock1 = new Stock(2, 75);
        Stock stock2 = new Stock(3, 2500);
        Stock stock3 = new Stock(4, 50);
        Stock stock4 = new Stock(5, 100);
        stocks.add(stock);
        stocks.add(stock1);
        stocks.add(stock2);
        stocks.add(stock3);
        stocks.add(stock4);
    }

    public void removeStock (int cod, int quantity) {
        for (Stock stock: stocks) {
            if(stock.getCod()==cod) {
                stock.setQuantity(stock.getQuantity()-quantity);
            }
        }
    }

  public ArrayList<Stock> getStocks () {
      return stocks;
  }
}
