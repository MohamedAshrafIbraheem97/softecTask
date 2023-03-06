import { NgModule } from '@angular/core';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [OrdersComponent, OrderDetailComponent, NewOrderComponent],
})
export class OrdersModule {}
