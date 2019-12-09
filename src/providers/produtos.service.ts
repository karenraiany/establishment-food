import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Http ,Response ,Headers, RequestOptions} from '@angular/http';

import { Produto } from '../models/produto';

@Injectable()
export class ProdutosService {

  private url = environment.apiUrl + 'produtos/';
  params = {};
  headers = {};


  constructor(private http: Http) { }

  getAll() {
    console.log(this.url)
    return this.http.get(this.url.toString(),{}).pipe(map((res: Response) =>{
      console.log(res)
      return res.json();
    }));
  }

  // getOne(id: String): Observable<Produto> {
  //   return this.http.get<Produto>(this.url + id)
  // }

  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post(this.url, produto).pipe(map((res: Response) =>{
      console.log(res.json())
      return res.json();
    }));
  }

  // updateProduto(produto: Produto): Observable<Produto>{
  //   return this.http.put<Produto>(this.url + produto.id, produto)
  // }

  // deleteProduto(produtoId: number): Observable<Produto> {
  //   return this.http.delete<Produto>(this.url + produtoId)
  // }

}