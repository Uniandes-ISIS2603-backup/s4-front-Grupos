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
    
    getEventos(grupoId): Observable<Evento[]> {
        return this.http.get<Evento[]>(API_URL + gruposdeinteres + '/' + grupoId + eventos);
    }

    getComentarios(grupoId, noticiaId): Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + gruposdeinteres + '/' + grupoId + noticias + '/' + noticiaId + comentarios);
    }

    getComentarioDetail(grupoId, noticiaId, comentarioId): Observable<Comentario>{
        return this.http.get<Comentario>(API_URL + gruposdeinteres + '/' + grupoId + noticias + '/' + noticiaId + comentarios + '/' + comentarioId);
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

   deleteComentario(grupoId, noticia_id, comentario_id): Observable<Comentario> {
    return this.http.delete<Comentario>(API_URL + gruposdeinteres + '/' + grupoId + noticias +'/'+ noticia_id + comentarios + '/' + comentario_id);
   }

    updateComentario(grupoId,noticiaId, comentario): Observable<Comentario> {
        return this.http.put<Comentario>(API_URL +gruposdeinteres  + '/' + grupoId+noticias + '/' + noticiaId + comentarios + '/' +  comentario.id, comentario);
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
<<<<<<< HEAD
    updateNoticia(grupoId,noticia): Observable<Noticia> {
        return this.http.put<Noticia>(API_URL +gruposdeinteres  + '/' + grupoId+noticias+'/'+noticia.id, noticia);
    }
    getNoticiaDetail(grupoId,noticiaId): Observable<Noticia> {
        return this.http.get<Noticia>(API_URL + gruposdeinteres  + '/' + grupoId+noticias + '/' + noticiaId);
    }
=======
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
>>>>>>> 951a7088760eead12562cb1359dcf2f4daa6de4c



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

    createComentario(grupoId, noticiaId, comentario): Observable<Comentario> {
        return this.http.post<Comentario>(API_URL + gruposdeinteres + '/' + grupoId + noticias + '/' + noticiaId + comentarios, comentario);     
    }
}

