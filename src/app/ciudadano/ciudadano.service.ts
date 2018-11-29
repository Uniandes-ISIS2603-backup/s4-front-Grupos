import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Ciudadano } from './ciudadano';
import { CiudadanoDetail } from './ciudadano-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const ciudadanos = '/ciudadanos';

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
    
    /**
    * Returns the Observable object with the details of an ciudadano retrieved from the API
    * @returns The ciudadano details
    */
    getCiudadanoDetail(ciudadanoId): Observable<CiudadanoDetail> {
        return this.http.get<CiudadanoDetail>(API_URL + ciudadanos + '/' + ciudadanoId);
    }
    
    createCiudadano(ciudadano): Observable<CiudadanoDetail> {
    return this.http.post<CiudadanoDetail>(API_URL + ciudadanos, ciudadano);
    }
    
    updateCiudadano(ciudadano): Observable<CiudadanoDetail>{
        return this.http.put<CiudadanoDetail>(API_URL + ciudadanos + '/' + ciudadano.id, ciudadano);
    }
    
    deleteCiudadano(ciudadanoid): Observable<CiudadanoDetail>{
        return this.http.delete<CiudadanoDetail>(API_URL + ciudadanos + '/' + ciudadanoid);
    }
}

