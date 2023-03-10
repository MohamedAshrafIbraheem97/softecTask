import { NgModule } from '@angular/core';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailComponent,
    NewOrderComponent,
    OrderListComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class OrdersModule {}
