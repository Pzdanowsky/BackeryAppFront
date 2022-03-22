import { Contractors } from './../contractors-domain/Contractors-model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Orders } from '../order-domain/Orders-model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  URLorder : string = "http://localhost:3000/Orders";
  URLcontractor : string = "http://localhost:3000/Contractors";

  getOrders(): Observable<Orders[]>
  {
    return this.http.get<Orders[]>(this.URLorder);
  }

  getContractors(): Observable<Contractors[]>
  {
    return this.http.get<Contractors[]>(this.URLcontractor);
  }

}
