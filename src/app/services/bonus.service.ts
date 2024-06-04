import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import IWizard from '../Models/wizard';


@Injectable({
    providedIn: 'root'
})
export class BonusService {

    private url = 'http://localhost:3000/wizards';
    constructor(private httpClient: HttpClient) { }

    getAllWizards(): Observable<Partial<IWizard[]>> {
        return this.httpClient.get<Partial<IWizard[]>>(this.url);
    }
    getWizardByid(id: string): Observable<Partial<IWizard>> {
        return this.httpClient.get(`${this.url}/${id}`);
    }

    create(data: IWizard): Observable<Partial<IWizard>> {
        return this.httpClient.post(this.url, data);
    }

    edit(id: string, data: IWizard) {
        const apiurl = `${this.url}/${id}`;
        return this.httpClient.put<Partial<IWizard[]>>(apiurl, data);
    }







}
