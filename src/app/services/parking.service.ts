import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private apiUrl = 'http://localhost:8000/properties-parking/';

  constructor(private http: HttpClient) {}

  getParking() {
    return this.http.get<string[]>(this.apiUrl);
  }
}
