import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// models
import { Order, payment_type } from '../models/order.model';
import { Product, ProductInsideOrder } from '../models/product.model';

// services
import { DatabaseService } from './database.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders = new BehaviorSubject<Order[]>(null!);

  constructor(
    private _databaseService: DatabaseService,
    private _productService: ProductService
  ) {
    // populate the orders behvaior subject
    this.getOrders();
  }

  // get all orders
  getOrders() {
    this._databaseService.getOrders().subscribe({
      next: (orders) => {
        this.orders.next(orders);
      },
      error: (e) => {
        throw new Error('an Error happened while getting orders' + e);
      },
    });
  }

  // convert invalid dates to valid one
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
          totalPrice += product.Quantity * fetchedProduct.ProductPrice;
        }
      });
    });

    return totalPrice;
  }

  // create a new order
  newOrder(
    items: ProductInsideOrder[],
    userId: string,
    paymentMethod: payment_type
  ) {
    let newOrder: Order = {
      OrderId: this.genrateId(),
      OrderDate: new Date(),
      UserId: userId,
      Products: items,
      PaymentType: paymentMethod,
    };

    // get the orders list and push the new order to it
    this.orders.next(this.orders.getValue().concat([newOrder]));
  }

  // genrate id
  private genrateId(): number {
    return Date.now();
  }
}
