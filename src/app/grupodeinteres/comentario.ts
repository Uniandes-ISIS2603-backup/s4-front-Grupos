import { Grupodeinteres } from "./grupodeinteres";
import {Noticia} from './noticia';
/**
* This class represents a noticia of the group of interes. 
* It contains all the information relevant to the news.
*/
export class Comentario {

    /**
     * El identificador del comentarios
     */
    id: number;

    /**
     * El nombre de quien hizo el comentario.
     */
    nombre: string;

    /**
     * El texto del comentario.
     */
    texto: string;

   /**
    * The grupo of the comentario
    */
   grupodeinteres: Grupodeinteres;

   /**
    * La noticia del comentaio
    */
   noticia: Noticia;
}