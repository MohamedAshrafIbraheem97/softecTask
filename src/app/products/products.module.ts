// modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';

// components
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [ProductsComponent, EditProductComponent, ProductListComponent],
  imports: [CommonModule, RouterModule, ProductsRoutingModule, FormsModule],
})
export class ProductsModule {}
