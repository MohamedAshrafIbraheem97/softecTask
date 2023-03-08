import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // {
  //   path: 'products',
  //   component: ProductsComponent,
  //   children: [
  //     { path: '', component: ProductListComponent },
  //     { path: 'edit/:id', component: EditProductComponent },
  //   ],
  // },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (_loadedModule) => _loadedModule.ProductsModule
      ),
  },
  {
    path: 'orders',
    component: OrdersComponent,
    children: [
      { path: '', component: OrderListComponent },
      { path: 'new', component: NewOrderComponent },
      { path: ':id', component: OrderDetailComponent },
    ],
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
