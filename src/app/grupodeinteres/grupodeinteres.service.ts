import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Grupodeinteres} from './grupodeinteres';
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const gruposdeinteres = '/gruposdeinteres.json';

/**
 * The service provider for everything related to ciudadanos
 */
@Injectable()
export class GrupodeinteresService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of ciudadanos retrieved from the API
     * @returns The list of ciudadanos in real time
     */
    getGrupos(): Observable<Grupodeinteres[]> {
        return this.http.get<Grupodeinteres[]>(API_URL + gruposdeinteres);
    }
}


