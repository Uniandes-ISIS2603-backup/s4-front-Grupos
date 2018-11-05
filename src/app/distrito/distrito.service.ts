import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Distrito } from './distrito';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const distritos = '/distritos.json';

/**
* The service provider for everything related to distritos
*/
@Injectable()
export class DistritoService {
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    getDistritos(): Observable<Distrito[]> {
        return this.http.get<Distrito[]>(API_URL + distritos);
    }
}
