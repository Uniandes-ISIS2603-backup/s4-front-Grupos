import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Grupodeinteres} from './grupodeinteres';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {GrupodeinteresDetail} from './grupodeinteres-detail';
import {Noticia} from './noticia';
import {Evento} from './evento';

const API_URL = environment.apiURL;

const gruposdeinteres = '/gruposdeinteres';
const noticias = '/noticias';
const eventos = '/eventos';
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
    
    getGrupoDetail(grupoId): Observable<GrupodeinteresDetail> {
        
        return this.http.get<GrupodeinteresDetail>(API_URL + gruposdeinteres + '/' + grupoId);
    }
    getNoticias(grupoId): Observable<Noticia[]> {
        return this.http.get<Noticia[]>(API_URL + gruposdeinteres + '/' + grupoId + noticias);
    }
    
    getEventos(grupoId): Observable<Evento[]> {
        return this.http.get<Evento[]>(API_URL + gruposdeinteres + '/' + grupoId + eventos);
    }
      /**
    * Creates a noticia
    * @param noticia The noticia
    * @returns True if the noticia was posted, false otherwise
    */
   createNoticia(grupoId, noticia): Observable<Noticia> {
    return this.http.post<Noticia>(API_URL + gruposdeinteres + '/' + grupoId + noticias, noticia);
   }
      /**
    * Creates a evento
    * @param evento The evento
    * @returns True if the evento was posted, false otherwise
    */
   createEvento(grupoId, evento): Observable<Evento> {
    return this.http.post<Evento>(API_URL + gruposdeinteres + '/' + grupoId + eventos, evento);     
    }
    
    createGrupo(grupo): Observable<GrupodeinteresDetail> {
    return this.http.post<GrupodeinteresDetail>(API_URL + gruposdeinteres, grupo);
    }
}

