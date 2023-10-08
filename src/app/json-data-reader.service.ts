import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataReaderService {
  
  productList:product []=[];
  constructor( private http: HttpClient) { }
  getallData(): Observable<product[]>
  {
    return this.http.get<product[]>('../../assets/amazon.books.json');
     
  }
  getById(id:number)
  {
    return this.http.get<product>('../../assets/amazon.books.json');
  }
}
