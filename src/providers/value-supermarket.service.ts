import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

import { ValueSupermarket } from '../models/value-supermarket';

@Injectable()
export class ValueSupermarketsService {

  private url = environment.apiUrl + 'value-supermarkets/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ValueSupermarket[]> {
    return this.http.get<ValueSupermarket[]>(this.url)
  }

  getOne(id: String): Observable<ValueSupermarket> {
    return this.http.get<ValueSupermarket>(this.url + id)
  }

  createValueSupermarket(valueSupermarket: ValueSupermarket): Observable<ValueSupermarket> {
    return this.http.post<ValueSupermarket>(this.url, valueSupermarket)
  }

  updateValueSupermarket(valueSupermarket: ValueSupermarket): Observable<ValueSupermarket>{
    return this.http.put<ValueSupermarket>(this.url + valueSupermarket.id, valueSupermarket)
  }

  deleteValueSupermarket(valueSupermarketId: number): Observable<ValueSupermarket> {
    return this.http.delete<ValueSupermarket>(this.url + valueSupermarketId)
  }

}