import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Patrocinio } from './patrocinio';
import { HttpClient } from '@angular/common/http';


const API_URL = "http://localhost:8080/s4_Grupos-api/api";
const patrocinios = '/patrocinios';


/**
 * The service provider for everything related to patrocicnios
 */
@Injectable()
export class PatrocinioService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}
     
   

    /**
     * Returns the Observable object containing the list of ciudadanos retrieved from the API
     * @returns The list of ciudadanos in real time
     */
    getPatrocinios(): Observable<Patrocinio[]> {
         return this.http.get<Patrocinio[]>(API_URL +patrocinios);
    }
}



