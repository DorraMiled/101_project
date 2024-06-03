import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import IWizard from '../Models/wizard';


@Injectable({
    providedIn: 'root'
})
export class BonusService {

    private url = 'http://localhost:3000/wizards';
    constructor(private httpClient: HttpClient) { }

    getAllWizards(): Observable<any> {
        return this.httpClient.get<IWizard[]>(this.url);
    }
    getWizardByid(id: string): Observable<any> {
        return this.httpClient.get<IWizard[]>(`${this.url}/${id}`);
    }

    create(data: IWizard): Observable<any> {


        return this.httpClient.post(this.url, data);

    }

    edit(id: string, data: IWizard): Observable<any> {
        const apiurl = `${this.url}/${id}`;
        return this.httpClient.put<IWizard[]>(apiurl, data);
    }







}
