import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Distrito } from './distrito';
import { DistritoDetail} from './distrito-detail';
import { Observable } from 'rxjs';
import { Locacion } from './locacion';

const API_URL = 'http://localhost:8080/s4_Grupos-api/api';
const distritos = '/distritos';
const locaciones = '/locaciones';
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
    getDistritoDetail(distritoId): Observable<DistritoDetail> {
        return this.http.get<DistritoDetail>(API_URL + distritos + '/' + distritoId);
    }
     /**
    * Creates a new distrito
    * @param distrito The new distrito
    * @returns The distrito with its new id if it was created, false if it wasn't
    */
   createDistrito(distrito): Observable<DistritoDetail> {
    return this.http.post<DistritoDetail>(API_URL + distritos, distrito);
}
 /**
    * Creates a new distrito
    * @param distrito The new distrito
    * @returns The distrito with its new id if it was created, false if it wasn't
    */
   deleteDistrito(distritoId): Observable<DistritoDetail> {
    return this.http.delete<DistritoDetail>(API_URL + distritos+'/'+ distritoId);
}
 /**
    * Updates an distrito
    * @param distrito The distrito's information updated
    * @returns The confirmation that the distrito was updated
    */
   updateDistrito(distrito): Observable<DistritoDetail> {
    return this.http.put<DistritoDetail>(API_URL + distritos + '/' + distrito.id, distrito);
}
getLocaciones(distritoId): Observable<Locacion[]> {
    return this.http.get<Locacion[]>(API_URL + distritos + '/' + distritoId + locaciones);
}
  /**
    * Creates a locacion
    * @param locacion The locacion
    * @returns True if the locacion was posted, false otherwise
    */
   createLocacion(distritoId, locacion): Observable<Locacion> {
    return this.http.post<Locacion>(API_URL + distritos + '/' + distritoId + locaciones, locacion);
   }
   /**
    * Creates a locacion
    * @param locacion The locacion
    * @returns True if the locacion was posted, false otherwise
    */
   deleteLocacion(distritoId, locacion_id): Observable<Locacion> {
    return this.http.delete<Locacion>(API_URL + distritos + '/' + distritoId + locaciones +'/'+ locacion_id);
   }
   /**
    * Updates an locacion
    * @param locacion The locacion's information updated
    * @returns The confirmation that the locacion was updated
    */
   updateLocacion(distritoId,locacion): Observable<Locacion> {
    return this.http.put<Locacion>(API_URL +distritos  + '/' + distritoId+locaciones+'/'+locacion.id, locacion);
}
getLocacionDetail(distritoId,locacionId): Observable<Locacion> {
    return this.http.get<Locacion>(API_URL + distritos  + '/' + distritoId+locaciones + '/' + locacionId);
}
}
