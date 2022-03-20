import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Orders } from '../order-domain/Orders-model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  URL : string = "http://localhost:3000/Orders";

  getOrders(): Observable<Orders[]>
  {
    return this.http.get<Orders[]>(this.URL);
  }

}
