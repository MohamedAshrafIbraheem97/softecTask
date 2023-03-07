import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// models
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';

// environments
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // endpoints to be hit
  products_url = environment.API_URL + 'porducts.json';
  orders_url = environment.API_URL + 'orders.json';
  users_url = environment.API_URL + 'users.json';

  constructor(private _http: HttpClient) {}

  // get all orders
  getOrders() {
    return this._http.get<Order[]>(this.orders_url);
  }

  // get all products
  getProducts() {
    return this._http.get<Product[]>(this.products_url);
  }

  // get all users
  getUsers() {
    return this._http.get<User[]>(this.users_url);
  }
}
