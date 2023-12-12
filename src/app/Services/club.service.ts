import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Club {
  id!: number;
 name!:String;
 description!:String;
}
@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private baseUrl = "http://localhost:8080/Clubs/";
  constructor(private http: HttpClient) { }
  getClubs(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}`+'All');
  }
    saveClub(club: Club): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`+'NewClub', club);
  }
    // Get event by Id - Read
    getClubById(id: number): Observable<any>{
      return this.http.get<any>(`${this.baseUrl}${id}`)
    }
  
    // Update event - Update
   
    updateClub(id: number, club: Club): Observable<Object>{
      return this.http.put(`${this.baseUrl}Update/${id}`, club);
    }
    // Delete event - Delete
    deleteClub(id: number): Observable<any>{
      return this.http.delete<any>(`${this.baseUrl}Delete/${id}`)
    }
    countClubs():any{
      return this.http.get<any>(`${this.baseUrl}Count`)
    }

}
