import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';
@Injectable({
  providedIn: 'root'
})
export class AttHistoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_URL + 'att_histos');
  }
  add(object: any): Observable<any> {
    return this.http.post(API_URL + 'att_histos', object);
  }
  getByCoachId(id: any): Observable<any> {
    return this.http.get(API_URL + `att_histos/coach/${id}`);
  }

  getByCustomerId(id: any): Observable<any> {
    return this.http.get(API_URL + `att_histos/customer/${id}`);
  }

}