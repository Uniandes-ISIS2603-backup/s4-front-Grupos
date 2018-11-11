import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locacion } from './locacion';
import { LocacionDetail} from './locacion-detail';
import { HttpClient } from '@angular/common/http';


const API_URL = "http://localhost:8080/s4_Grupos-api/api";
const locaciones = '/locaciones';


/**
 * The service provider for everything related to patrocicnios
 */
@Injectable()
export class LocacionService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}
     
   

    /**
     * Returns the Observable object containing the list of locacions retrieved from the API
     * @returns The list of ciudadanos in real time
     */
    getLocacions(): Observable<Locacion[]> {
         return this.http.get<Locacion[]>(API_URL +locaciones);
    }    
    /**
     * Returns the Observable object containing the locacion retrieved from the API
     * @returns The list of ciudadanos in real time
     */
     getLocacionDetail(locacionId): Observable<LocacionDetail> {
        return this.http.get<LocacionDetail>(API_URL + locaciones + '/' + locacionId);
    }
     /**
    * Creates a new locacion
    * @param locacion The new locacion
    * @returns The locacion with its new id if it was created, false if it wasn't
    */
   createLocacion(locacion): Observable<LocacionDetail> {
    return this.http.post<LocacionDetail>(API_URL +  locaciones, locacion);
    }
}



