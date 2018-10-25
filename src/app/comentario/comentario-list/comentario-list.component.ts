import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';
 
@Component({
    selector: 'app-comentario',
    templateUrl: './comentario-list.component.html',
    styleUrls: ['./comentario-list.component.css']
})

export class ComentarioListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param comentarioService The comentario's services provider
     */
    constructor(private comentarioService: ComentarioService) { }
    
    /**
     * The list of comentarios which belong to the GruposDeInteres
     */
    comentarios: Comentario[];

    /**
     * Asks the service to update the list of comentarios
     */
    getComentarios(): void {
        this.comentarioService.getComentarios()
            .subscribe(comentarios => this.comentarios = comentarios);
    }

    /**
     * This will initialize the component by retrieving the list of comentarios from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getComentarios();
    }

}

