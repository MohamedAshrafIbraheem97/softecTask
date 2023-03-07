import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { DatabaseService } from './database.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  ordersChanged = new BehaviorSubject<Order[]>(null!);

  constructor(
    private _databaseService: DatabaseService,
    private _productService: ProductService
  ) {
    this.getOrders();
  }

  getOrders() {
    this._databaseService.getOrders().subscribe({
      next: (orders) => {
        this.ordersChanged.next(orders);
      },
      error: (e) => {
        throw new Error('an Error happened while getting orders' + e);
      },
    });
  }

  makeDateValid(dateToBeValidated: Date) {
    let strDate = dateToBeValidated.toString();
    let char = ' ';
    let position = 15;
    let validatedDate = [
      strDate.slice(0, position),
      char,
      strDate.slice(position),
    ].join('');

    return validatedDate;
  }

  // calculate order total price
  calculateTotalOrderPrice(order: Order): number {
    let totalPrice: number = 0; // total order price
    let fetchedProduct: Product | undefined; // product to know its price

    // iterate over products inside the order
    order.Products.forEach((product) => {
      // get specific product
      this._productService.productsChanged.subscribe((_products) => {
        fetchedProduct = _products.find(
          (_filteredProducts) =>
            _filteredProducts.ProductId === product.ProductId
        );

        // if the product is found then add its price
        if (fetchedProduct) {
          totalPrice += fetchedProduct.ProductPrice;
        }
      });
    });

    return totalPrice;
  }
}
