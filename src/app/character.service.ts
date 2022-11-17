import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Character from 'src/models/Character';
import Response from 'src/types/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Response< Character[]>> {
    return this.http.get<Response<Character[]>>('http://localhost:3000/character')
  }

  public get(id: string) {
    return this.http.get<Response<Character>>(`http://localhost:3000/character/${id}`)
  }

  public create(character: Character) {
    return this.http.post(`http://localhost:3000/character`, character)
  }
}
