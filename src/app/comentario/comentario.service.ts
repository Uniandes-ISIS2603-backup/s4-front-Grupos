import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comentario } from './comentario';
import { ComentarioDetail } from './comentario-detail';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const comentarios = '/comentarios';

/**
 * The service provider for everything related to comentarios
 */
@Injectable()
export class ComentarioService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of comentarios retrieved from the API
     * @returns The list of comentarios in real time
     */
    getComentarios(): Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + comentarios);
    }
    
    getComentarioDetail(comentarioId): Observable<ComentarioDetail> {
        return this.http.get<ComentarioDetail>(API_URL + comentarios + '/' + comentarioId);
    }
    
    createComentario(comentario): Observable<Comentario> {
    return this.http.post<Comentario>(API_URL + comentarios, comentario);
    }
}



