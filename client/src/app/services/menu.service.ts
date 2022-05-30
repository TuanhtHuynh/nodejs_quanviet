import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menus.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  listMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.baseUrl}/menus`);
  }

  addMenu(data: Menu) {
    return this.http.post(`${this.baseUrl}/menus/new`, data);
  }

  deleteMenu(id: number) {
    return this.http.delete(`${this.baseUrl}/menus/${id}`);
  }

  getMenuDetail(id: number) {
    return this.http.get(`${this.baseUrl}/menus/edit/${id}`);
  }
  getSubmenu(id: any) {
    ///sub-1/edit/:id
    return this.http.get(`${this.baseUrl}/menus/sub-1/edit/${id}`);
  }

  addMegaHeader(id: any, data: any) {
    // /sub-1/:id/new
    return this.http.post(`${this.baseUrl}/menus/sub-1/${id}/new`, data);
  }

  addMegaItem(id: any, data: any) {
    // /sub-2/new/:id/sub-1
    return this.http.post(`${this.baseUrl}/menus/sub-2/new/${id}/sub-1`, data);
  }

  deleteSubHeader(id: any) {
    return this.http.delete(`${this.baseUrl}/menus/sub-1/${id}`);
  }
}
