import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const me = this;
    me.productService.getProductList().subscribe((products) => {
      me.productList = products;
    });

    // me.activatedRoute.queryParamMap.subscribe((query) => {
    //   const orderBy = query.get('orderby');
    //   console.log(orderBy);
    // });
  }
}
