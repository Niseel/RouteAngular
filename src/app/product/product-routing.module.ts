import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
