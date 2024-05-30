import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ICharacter from 'src/app/Models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<Partial<ICharacter[]>>(this.apiUrl);
  }
}
