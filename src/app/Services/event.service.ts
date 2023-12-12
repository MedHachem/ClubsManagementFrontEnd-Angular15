import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from './club.service';
export class Event {
  id!: number;
  title!: string;
  date!:String;
  place_number!:number;
  price!:number;
  description!:String;
  clubs!:Club[];
}
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = "http://localhost:8080/Events/";
  constructor(private http: HttpClient) { }
  getEvents(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}`+'All');
  }
  

  saveEvent(event: Event): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`+'NewEvent', event);
  }
    // Get event by Id - Read
    getEventById(id: number): Observable<any>{
      return this.http.get<any>(`${this.baseUrl}${id}`)
    }
  
    // Update event - Update
   
    updateEvent(id: number, event: Event): Observable<Object>{
      return this.http.put(`${this.baseUrl}Update/${id}`, event);
    }
    // Delete event - Delete
    deleteEvent(id: number): Observable<any>{
      return this.http.delete<any>(`${this.baseUrl}Delete/${id}`)
    }
    countEvents():any{
      return this.http.get<any>(`${this.baseUrl}Count`)
    }
}
