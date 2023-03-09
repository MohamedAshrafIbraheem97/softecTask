import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

// models
import { Order } from 'src/app/models/order.model';
import { Product, ProductInsideOrder } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';

// services
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  orderDetails!: Order; // details of a specific order
  userDetails!: User; // user details in a specific order
  productsDetails: Product[] = []; //  products details of a specific order
  subscriptions: Subscription[] = []; // subscriptions is array as there's a lot of subscriptions below

  constructor(
    private readonly _orderService: OrderService,
    private _userService: UserService,
    private _productService: ProductService,
    private _currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this._currentRoute.params.subscribe((params: Params) => {
        this.initOrderDetails(+params['id']);
      })
    );
  }

  ngOnDestroy(): void {
    // unsubscripe from all subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  // populate data when getting a specific order
  initOrderDetails(orderId: number) {
    // get order details
    this.subscriptions.push(
      this._orderService.orders.subscribe((_orders) => {
        if (_orders) {
          this.orderDetails = _orders.find(
            (_order) => _order.OrderId === orderId
          )!;
          // get products of the specified order
          this.getProducts(this.orderDetails.Products);
          // get user details of the specified order
          this.getUserById(this.orderDetails.UserId);
        }
      })
    );
  }

  // get products' details of the order
  getProducts(products: ProductInsideOrder[]) {
    // iterate over order products
    products.forEach((orderProduct) => {
      this.subscriptions.push(
        this._productService.productsChanged.subscribe((_products) => {
          // iterate over all products to get the details of products inside the order
          for (const product of _products) {
            if (product.ProductId === orderProduct.ProductId) {
              this.productsDetails.push(product);
            }
          }
        })
      );
    });
  }

  // get the user who placed this order
  getUserById(userId: string) {
    this.subscriptions.push(
      this._userService.users.subscribe((users) => {
        if (users) {
          this.userDetails = users.find((_user) => _user.Id === userId)!;
        }
      })
    );
  }
}
