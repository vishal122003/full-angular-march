import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects`);
  }
  addEnquiry(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/enquiries`,data);
  }
  getEnquiries():Observable<any>{
    return this.http.get(`${this.apiUrl}/enquiries`);
  }
}
