import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileuploadService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  uploadImage(file: FormData) {
    return this.http.post(`${this.baseUrl}/upload/image`, file);
  }
}
