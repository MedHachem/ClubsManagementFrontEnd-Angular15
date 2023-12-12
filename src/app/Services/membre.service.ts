import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.service';
export class Membre {
  id!: number;
  name!:String;
  tel!:String;
  level!:String;
  clubs:any;
 
}


@Injectable({
  providedIn: 'root'
})

export class MembreService {

  
  private baseUrl = 'http://localhost:8080/Membres/';

  constructor(private http: HttpClient) { }
  /*
  getUsers(): Observable<any[]>{
    
    return this.http.get<any[]>(`${this.baseUrl}`+'AllUsers');
  }*/
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'All');
  }
  saveUser(user: Membre): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`+'NewMembre', user);
  }
  getUserById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}${id}`)
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}Delete/${id}`)
  }
  updateUser(id: number, user: Membre): Observable<Object>{
    return this.http.put(`${this.baseUrl}Update/${id}`, user);
  }
  countUsers():any{
    return this.http.get<any>(`${this.baseUrl}Count`)
  }
  
}
