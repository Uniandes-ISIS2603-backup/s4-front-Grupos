import { Grupodeinteres } from "./grupodeinteres";

export class Evento {
    /**
    * The grupo's id
    */
    id: number;

    /**
    * Name of evento
    */
    nombre: string;
    
    /**
    * fecha del evento
    */
    fecha: string;
    
    /**
    * The grupo of the evento
    */
   grupodeinteres: Grupodeinteres;

}
