import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Supermarket } from '../models/supermarket';

@Injectable()
export class SupermarketsService {

  private url = environment.apiUrl + 'supermarkets/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Supermarket[]> {
    return this.http.get<Supermarket[]>(this.url)
  }

  getOne(id: String): Observable<Supermarket> {
    return this.http.get<Supermarket>(this.url + id)
  }

  createSupermarket(supermarket: Supermarket): Observable<Supermarket> {
    return this.http.post<Supermarket>(this.url, supermarket)
  }

  updateSupermarket(supermarket: Supermarket): Observable<Supermarket>{
    return this.http.put<Supermarket>(this.url + supermarket.id, supermarket)
  }

  deleteSupermarket(supermarketId: number): Observable<Supermarket> {
    return this.http.delete<Supermarket>(this.url + supermarketId)
  }

}