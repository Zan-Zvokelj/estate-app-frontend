import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

private apiUrl = 'http://localhost:8000/properties-sale/';

  constructor(private http: HttpClient) { }

getSales(){
  return this.http.get<string[]>(this.apiUrl);
}


}
