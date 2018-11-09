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
     * Returns the Observable object containing the list of patrocinios retrieved from the API
     * @returns The list of ciudadanos in real time
     */
    getPatrocinios(): Observable<Patrocinio[]> {
         return this.http.get<Patrocinio[]>(API_URL +patrocinios);
    }    
    /**
     * Returns the Observable object containing the patrocinio retrieved from the API
     * @returns The list of ciudadanos in real time
     */
     getPatrocinioDetail(patrocinioId): Observable<PatrocinioDetail> {
        return this.http.get<PatrocinioDetail>(API_URL + patrocinios + '/' + patrocinioId);
    }
     /**
    * Creates a new patrocinio
    * @param patrocinio The new patrocinio
    * @returns The patrocinio with its new id if it was created, false if it wasn't
    */
   createPatrocinio(patrocinio): Observable<PatrocinioDetail> {
    return this.http.post<PatrocinioDetail>(API_URL + patrocinios, patrocinio);
    }
}



