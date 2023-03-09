// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componenets
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      { path: '', component: OrderListComponent },
      { path: 'new', component: NewOrderComponent },
      { path: ':id', component: OrderDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
