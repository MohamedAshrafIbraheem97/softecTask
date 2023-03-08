// modules
import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';

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
