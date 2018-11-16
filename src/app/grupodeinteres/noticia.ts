import { Grupodeinteres } from "./grupodeinteres";

/**
* This class represents a noticia of the group of interes. 
* It contains all the information relevant to the news.
*/
export class Noticia {
    /**
    * The noticia's id
    */
    id: number;
    name:string;

    /**
    * The noticia's description
    */
    description: string;
    
    /**
    * The noticia's image
    */
   imagen: string;
   /**
    * The noticia's titular
    */
   titular: string;
  
   /**
    * The grupo of the review
    */
   grupodeinteres: Grupodeinteres;

}