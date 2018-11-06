import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Distrito } from './distrito';
import { DistritoDetail} from './distrito-detail';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s4_Grupos-api/api';
const distritos = '/distritos';
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

}
