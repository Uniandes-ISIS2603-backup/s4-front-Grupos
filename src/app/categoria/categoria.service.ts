import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Categoria} from './categoria';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8080/s4_Grupos-api/api";
const categorias = '/categorias';

/**
 * The service provider for everything related to ciudadanos
 */
@Injectable()
export class CategoriaService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of ciudadanos retrieved from the API
     * @returns The list of ciudadanos in real time
     */
    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(API_URL + categorias);
    }
}