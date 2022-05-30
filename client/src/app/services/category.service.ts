import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesRespon } from '../models/categoriesRespon';
import { Observable } from 'rxjs';
import { MessageResponse } from '../models/messageResponse';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  listCategories(
    sort: string,
    order: string = 'asc',
    page: Number = 1,
    size: Number = 3
  ): Observable<CategoriesRespon> {
    return this.http.get<CategoriesRespon>(
      this.baseUrl +
        `/categories?page=${page}&size=${size}&sort=${sort}&order=${order}`
    );
  }

  addCategory(data: any): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(
      this.baseUrl + '/categories/new',
      data
    );
  }
}
