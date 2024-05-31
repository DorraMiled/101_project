import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import IWizard from '../Models/wizard';


@Injectable({
    providedIn: 'root'
})
export class BonusService {


    constructor(private httpClient: HttpClient) { }

    getAllWizards() {
        return this.httpClient.get<IWizard[]>('http://localhost:3000/wizards');
    }



}
