import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CharacterClass from 'src/models/CharacterClass';
import Response from 'src/types/Response';
import { BASEURL } from '../util';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Response<CharacterClass[]>> {
    return this.http.get<Response<CharacterClass[]>>(`${BASEURL}/class`)
  }

  public get(name: string) {
    return this.http.get<Response<CharacterClass>>(`${BASEURL}/class?name=${name}`)
  }

  public create(characterClass: CharacterClass) {
    return this.http.post(`${BASEURL}/class`, characterClass)
  }
}
