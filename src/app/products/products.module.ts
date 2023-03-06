import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent, EditProductComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
