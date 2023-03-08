// modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';

// components
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductsComponent, EditProductComponent, ProductListComponent],
  imports: [CommonModule, RouterModule, ProductsRoutingModule, FormsModule],
})
export class ProductsModule {}
