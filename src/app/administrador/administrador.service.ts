import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Administrador} from './administrador';

const API_URL = "../../assets/";
const administradores = '/administradores.json';

/**
 * The service provider for everything related to administradores
 */
@Injectable()
export class AdministradorService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of administradores retrieved from the API
     * @returns The list of administradores in real time
     */
    getAdministradores(): Observable<Administrador[]> {
        return this.http.get<Administrador[]>(API_URL + administradores);
    }
}
