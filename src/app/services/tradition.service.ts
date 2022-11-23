import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Tradition from 'src/models/Tradition';
import Response from 'src/types/Response';
import { BASEURL } from '../util';

@Injectable({
  providedIn: 'root'
})
export class TraditionService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Response<Tradition[]>> {
    return this.http.get<Response<Tradition[]>>(`${BASEURL}/tradition`)
  }

  public get(name: string) {
    return this.http.get<Response<Tradition>>(`${BASEURL}/tradition?name=${name}`)
  }

  public create(tradition: Tradition) {
    return this.http.post(`${BASEURL}/tradition`, tradition)
  }
}
