import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ciudadano } from './ciudadano';
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const ciudadanos = '/ciudadanos.json';

/**
 * The service provider for everything related to ciudadanos
 */
@Injectable()
export class CiudadanoService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of ciudadanos retrieved from the API
     * @returns The list of ciudadanos in real time
     */
    getCiudadanos(): Observable<Ciudadano[]> {
        return this.http.get<Ciudadano[]>(API_URL + ciudadanos);
    }
}



