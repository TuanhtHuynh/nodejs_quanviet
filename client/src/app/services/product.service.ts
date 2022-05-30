import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponse } from '../models/messageResponse';
import { ProductResponse } from '../models/productReponse';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient, private categories: CategoryService) {}

  listProducts(
    sort: string,
    order: string = 'asc',
    page: Number = 1,
    size: Number = 3
  ): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      this.baseUrl +
        `/products?page=${page}&size=${size}&sort=${sort}&order=${order}`
    );
  }

  listCategories() {
    return this.categories.listCategories('name', '', 0, 0);
  }

  addProduct(data: any): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(
      this.baseUrl + '/products/new',
      data
    );
  }

  getProductDetail(uid: number) {
    return this.http.get(`${this.baseUrl}/products/edit/${uid}`);
  }

  updateProduct(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/products/update`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }
}
