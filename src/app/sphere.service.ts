import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Sphere from 'src/models/Sphere';
import Response from 'src/types/Response';

@Injectable({
  providedIn: 'root'
})
export class SphereService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Response<Sphere[]>> {
    return this.http.get<Response<Sphere[]>>('http://localhost:3000/sphere')
  }

  public get(name: string) {
    return this.http.get<Response<Sphere>>(`http://localhost:3000/sphere?name=${name}`)
  }

  public create(sphere: Sphere) {
    return this.http.post(`http://localhost:3000/sphere`, sphere)
  }
}
