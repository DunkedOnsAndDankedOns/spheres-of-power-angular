import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Character from 'src/models/Character';
import Response from 'src/types/Response';
import { Observable } from 'rxjs';
import { BASEURL } from '../util';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Response< Character[]>> {
    return this.http.get<Response<Character[]>>(`${BASEURL}/character`)
  }

  public get(id: string) {
    return this.http.get<Response<Character>>(`${BASEURL}/character/${id}`)
  }

  public create(character: Character) {
    return this.http.post(`${BASEURL}/character`, character)
  }
}
