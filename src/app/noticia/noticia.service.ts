
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from './noticia';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;
const noticias = 'gruposdeinteres/1/noticias';

/**
* The service provider for everything related to noticias
*/
@Injectable()
export class NoticiaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getNoticias() : Observable<Noticia[]> {
        return this.http.get<Noticia[]>(API_URL + noticias);
    }
    
}