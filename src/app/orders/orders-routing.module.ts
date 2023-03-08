// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componenets
import { OrdersComponent } from './orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';

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
