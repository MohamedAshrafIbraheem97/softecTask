import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';

// models
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';

// database files
import orders from '../../../order-master-dp/orders.json';
import products from '../../../order-master-dp/porducts.json';
import users from '../../../order-master-dp/users.json';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {}

  getOrders() {
    let allOrders: Order[] = orders;

    let orderObservable: Observable<Order[]> = of<Order[]>(allOrders);

    return orderObservable;
  }

  getProducts() {
    let allProducts: Product[] = products;

    let productObservable: Observable<Product[]> = of<Product[]>(allProducts);

    return productObservable;
  }

  getUsers() {
    let allUsers: User[] = users;

    let userObservable: Observable<User[]> = of<User[]>(allUsers);

    return userObservable;
  }
}
