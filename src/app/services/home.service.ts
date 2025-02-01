import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'http://localhost:8000/properties-home/';

  constructor(private http: HttpClient) {}

  getHomes() {
    return this.http.get<string[]>(this.apiUrl);
  }
}
