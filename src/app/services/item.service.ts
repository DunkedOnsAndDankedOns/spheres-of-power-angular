import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Item from 'src/models/Item';
import Response from 'src/types/Response';
import { BASEURL } from '../util';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Response<Item[]>> {
    return this.http.get<Response<Item[]>>(`${BASEURL}/item`)
  }

  public get(name: string) {
    return this.http.get<Response<Item>>(`${BASEURL}/item?name=${name}`)
  }

  public create(item: Item) {
    return this.http.post(`${BASEURL}/item`, item)
  }
}
