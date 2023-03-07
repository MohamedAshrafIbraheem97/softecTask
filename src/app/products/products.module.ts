import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, EditProductComponent, ProductListComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class ProductsModule {}
