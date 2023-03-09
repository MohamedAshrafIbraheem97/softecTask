// modules
import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailComponent,
    NewOrderComponent,
    OrderListComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, FormsModule],
})
export class OrdersModule {}
