import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductResponse } from 'src/app/models/productReponse';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  listProducts!: Product[];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .listProducts('product_name')
      .subscribe((data: any) => (this.listProducts = data.products));
  }
}
