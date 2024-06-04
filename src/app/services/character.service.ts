import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ICharacter from 'src/app/Models/character';
import { Observable } from 'rxjs';
import IWand from 'src/app/Models/character';

@Injectable({
  providedIn: 'root'
})
export class CharService {
  private apiUrl = 'https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.apiUrl);
  }

}
