import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductComponent, ProductEditComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {} // setting xong xuôi cần add ProductModule vào app module(thằng cha)
