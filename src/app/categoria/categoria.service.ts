import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from './categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CategoriaDetail } from './categoria-detail';

const API_URL = environment.apiURL;
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
    constructor(private http: HttpClient) { }

    /**
     * Returns the Observable object containing the list of ciudadanos retrieved from the API
     * @returns The list of ciudadanos in real time
     */
    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(API_URL + categorias);
    }

    getCategoriaDetail(categoriaId): Observable<CategoriaDetail> {

        return this.http.get<CategoriaDetail>(API_URL + categorias + '/' + categoriaId);
    }

    createCategoria(categoria): Observable<CategoriaDetail> {

        return this.http.post<CategoriaDetail>(API_URL + categorias, categoria);
    }

    updateCategoria(categoria): Observable<CategoriaDetail> {
        return this.http.put<CategoriaDetail>(API_URL + categorias + '/' + categoria.id, categoria);
    }

    deleteCategoria(categoriaId): Observable<CategoriaDetail> {
        return this.http.delete<CategoriaDetail>(API_URL + categorias + '/' + categoriaId);
    }

}