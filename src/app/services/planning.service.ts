import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';
@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_URL + 'plannings');
  }
  add(object: any): Observable<any> {
    return this.http.post(API_URL + 'plannings', object);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(API_URL + `plannings/${id}`);
  }
  update(id: any, object: any): Observable<any> {
    return this.http.put(API_URL + `plannings/${id}`, object);
  }
  getById(id: any): Observable<any> {
    return this.http.get(API_URL + `plannings/${id}`);
  }

}