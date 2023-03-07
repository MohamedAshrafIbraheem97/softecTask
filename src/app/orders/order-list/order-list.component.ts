import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders!: Order[];

  constructor(private _orderService: OrderService) {}

  ngOnInit(): void {
    this._orderService.ordersChanged.subscribe((_orders) => {
      if (_orders) {
        this.orders = this.convertOrderDatesToValidDates(_orders);
        this.orders = this.calculateOrderPrice(_orders);
      }
    });
  }

  // convert non valid dates inside order to valid one and return all orders
  private convertOrderDatesToValidDates(orders: Order[]) {
    let modifedOrders: Order[] = [];

    orders.forEach((order) => {
      let date = new Date(order.OrderDate).getTime();

      // check if date is valid or not otherwise make it valid
      if (isNaN(date)) {
        let validatedDate = this._orderService.makeDateValid(order.OrderDate);
        order.OrderDate = new Date(validatedDate);
      }

      order.OrderDate = new Date(order.OrderDate);

      modifedOrders.push(order);
    });

    return modifedOrders;
  }

  private calculateOrderPrice(orders: Order[]) {
    let modifedOrders: Order[] = [];

    orders.forEach((order) => {
      order.totalPrice = this._orderService.calculateTotalOrderPrice(order);

      modifedOrders.push(order);
    });

    return modifedOrders;
  }
}