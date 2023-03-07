import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order, payment_type } from 'src/app/models/order.model';
import {
  newOrder,
  Product,
  ProductInsideOrder,
} from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit, OnDestroy {
  order: newOrder[] = [];
  users: User[] = [];
  paymentMethods = payment_type;
  subscription: Subscription[] = [];

  constructor(
    private _productService: ProductService,
    private _userService: UserService,
    private _orderService: OrderService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // adding subscriped products to subscription array to be unsubscriped later
    this.subscription.push(
      // getting products added to the order
      this._productService.productsAddedToNewOrder.subscribe((_products) => {
        if (_products) {
          this.order = _products;
        }
      })
    );

    // adding subscriped products to subscription array to be unsubscriped later
    this.subscription.push(
      // getting users to populate users list to be used in choosing users
      this._userService.users.subscribe((_users) => {
        if (_users) {
          this.users = _users;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  onSubmit(form: NgForm) {
    let userId = form.value.customer;
    let paymentMethod = form.value.paymentMethod;
    let totalQty = this.getTotalQtyOfEachProduct();

    this._orderService.newOrder(totalQty, userId, paymentMethod);

    this._router.navigate(['orders']);
  }

  // calculate total Qty of single product in the order
  getTotalQtyOfEachProduct(): ProductInsideOrder[] {
    let copiedProducts: ProductInsideOrder[] = [];

    for (let i = 0; i < this.order.length; i++) {
      const element = this.order[i];

      if (copiedProducts.length < 1) {
        copiedProducts.push({
          ProductId: this.order[i].product.ProductId,
          Quantity: this.order[i].Pieces,
        });
      } else {
        for (let j = 0; j < copiedProducts.length; j++) {
          if (this.order[i].product.ProductId === copiedProducts[j].ProductId) {
            copiedProducts[j].Quantity += 1;
          }
        }
      }
    }

    return copiedProducts;
  }
}
