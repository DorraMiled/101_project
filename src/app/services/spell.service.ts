import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import ISpell from '../Models/spell';


@Injectable({
    providedIn: 'root'
})
export class SpellService {
    private apiUrl = 'https://harry-potter-api-3a23c827ee69.herokuapp.com/api/spells';

    constructor(private http: HttpClient) { }

    getSpells(): Observable<ISpell[]> {
        return this.http.get<ISpell[]>(this.apiUrl);
    }

}
