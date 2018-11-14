
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s4_Grupos-api/api';
const noticias = '/noticias';

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
    
  
    
}