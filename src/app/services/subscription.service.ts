import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_URL + 'subscriptions');
  }
  add(object: any): Observable<any> {
    return this.http.post(API_URL + 'subscriptions', object);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(API_URL + `subscriptions/${id}`);
  }
  update(id: any, object: any): Observable<any> {
    return this.http.put(API_URL + `subscriptions/${id}`, object);
  }
  getById(id: any): Observable<any> {
    return this.http.get(API_URL + `subscriptions/${id}`);
  }

}