import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ComentarioService} from '../comentario.service';
type DateString = {month: number, day: number, year: number};
import {Comentario} from '../comentario';

@Component({
    selector: 'app-comentario-create',
    templateUrl: './comentario-create.component.html',
    styleUrls: ['./comentario-create.component.css'],
    providers: [DatePipe]
})
export class ComentarioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comentarioService The comentarioes' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private comentarioService: ComentarioService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new comentario
    */
    comentario: Comentario;
    /**
    * Cancels the creation of the new comentario
    * Redirects to the comentarioes' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The comentario wasn\'t created', 'Comentario creation');
        this.router.navigate(['/comentarios/list']);
    }

    /**
    * Creates a new comentario
    */
    createComentario(): Comentario {
       
        this.comentarioService.createComentario(this.comentario)   .subscribe(comentario => {   this.comentario.id = comentario.id;  
            this.router.navigate(['/comentarios/list']);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.comentario;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log(123);
        this.comentario = new Comentario();
        
    }

}
