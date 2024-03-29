import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Grupodeinteres} from './grupodeinteres';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {GrupodeinteresDetail} from './grupodeinteres-detail';
import {Noticia} from './noticia';
import {Evento} from './evento';
import {Comentario} from './comentario';

const API_URL = environment.apiURL;

const gruposdeinteres = '/gruposdeinteres';
const noticias = '/noticias';
const eventos = '/eventos';
const comentarios = '/comentarios';
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
    
    /**
    * Gets a evento
    * @param evento The evento
    * @param grupoId id del grupo
    * @returns True if the evento was get, false otherwise
    */
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
    * Creates a noticia
    * @param noticia The noticia
    * @returns True if the noticia was posted, false otherwise
    */
   deleteNoticia(grupoId, noticia_id): Observable<Noticia> {
    return this.http.delete<Noticia>(API_URL + gruposdeinteres + '/' + grupoId + noticias +'/'+ noticia_id);
   }
   
 /**
    * Updates an noticia
    * @param noticia The noticia's information updated
    * @returns The confirmation that the noticia was updated
    */
   updateGrupodeinteres(grupo): Observable<Grupodeinteres> {
    return this.http.put<Grupodeinteres>(API_URL +gruposdeinteres  + '/' +grupo.id, grupo);
} 
 /**
    * Updates an noticia
    * @param noticia The noticia's information updated
    * @returns The confirmation that the noticia was updated
    */
   updateNoticia(grupoId,noticia): Observable<Noticia> {
    return this.http.put<Noticia>(API_URL +gruposdeinteres  + '/' + grupoId+noticias+'/'+noticia.id, noticia);
}
getNoticiaDetail(grupoId,noticiaId): Observable<Noticia> {
    return this.http.get<Noticia>(API_URL + gruposdeinteres  + '/' + grupoId+noticias + '/' + noticiaId);
}
/**
    * Creates a new grupodeinteres
    * @param grupodeinteres The new grupodeinteres
    * @returns The grupodeinteres with its new id if it was created, false if it wasn't
    */
   deleteGrupodeinteres(grupodeinteresId): Observable<GrupodeinteresDetail> {
    return this.http.delete<GrupodeinteresDetail>(API_URL + gruposdeinteres+'/'+ grupodeinteresId);
}
 /**



      /**
    * Creates a evento
    * @param evento The evento
    * @param grupoId id del grupo
    * @returns True if the evento was posted, false otherwise
    */
    createEvento(grupoId, evento): Observable<Evento> {
    return this.http.post<Evento>(API_URL + gruposdeinteres + '/' + grupoId + eventos, evento);     
    }
    
    /**
    * Updates an evento
    * @param evento The evento's information updated
    * @param grupoId id del grupo
    * @returns The confirmation that the evento was updated
    */
    updateEvento(grupoId,evento): Observable<Evento> {
    return this.http.put<Evento>(API_URL +gruposdeinteres  + '/' + grupoId+eventos+'/'+evento.id, evento);
    }
    
    /**
    * Deletes a evento
    * @param evento The evento
    * @param grupoId id del grupo
    * @returns True if the evento was deleted, false otherwise
    */
    deleteEvento(grupoId, evento_id): Observable<Evento> {
    return this.http.delete<Evento>(API_URL + gruposdeinteres + '/' + grupoId + eventos +'/'+ evento_id);
    }

    /**
    * Gets a evento
    * @param evento The evento
    * @param grupoId id del grupo
    * @returns True if the evento was get, false otherwise
    */
    getEventoDetail(grupoId,eventoId): Observable<Evento> {
    return this.http.get<Evento>(API_URL + gruposdeinteres  + '/' + grupoId+eventos + '/' + eventoId);
    }
    
    createGrupo(grupo): Observable<GrupodeinteresDetail> {
    return this.http.post<GrupodeinteresDetail>(API_URL + gruposdeinteres, grupo);
    }
  
  createComentario(grupoId, noticiaId, comentario): Observable<Comentario> {
        return this.http.post<Comentario>(API_URL + gruposdeinteres + '/' + grupoId + noticias + '/' + noticiaId + comentarios, comentario);     
    }
  
  updateComentario(grupoId,noticiaId, comentario): Observable<Comentario> {
        return this.http.put<Comentario>(API_URL +gruposdeinteres  + '/' + grupoId+noticias + '/' + noticiaId + comentarios + '/' +  comentario.id, comentario);
    }
  
  getComentarios(grupoId, noticiaId): Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + gruposdeinteres + '/' + grupoId + noticias + '/' + noticiaId + comentarios);
    }
  
  deleteComentario(grupoId, noticia_id, comentario_id): Observable<Comentario> {
    return this.http.delete<Comentario>(API_URL + gruposdeinteres + '/' + grupoId + noticias +'/'+ noticia_id + comentarios + '/' + comentario_id);
   }
  
  getComentarioDetail(grupoId, noticiaId, comentarioId): Observable<Comentario>{
        return this.http.get<Comentario>(API_URL + gruposdeinteres + '/' + grupoId + noticias + '/' + noticiaId + comentarios + '/' + comentarioId);
    }

}
