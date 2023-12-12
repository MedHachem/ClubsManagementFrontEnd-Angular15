import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
 array:any;
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  getfirstdata():any{
    return this.http.get<any>(`${this.baseUrl}counts`)
  }
}
