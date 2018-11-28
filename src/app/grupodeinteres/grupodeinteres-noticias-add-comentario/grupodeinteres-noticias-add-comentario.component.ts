import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Comentario} from '../comentario';

@Component({
    selector: 'app-grupodeinteres-noticias-add-comentario',
    templateUrl: './grupodeinteres-noticias-add-comentario.component.html'
})
export class GrupodeinteresNoticiaAddComentarioComponent implements OnInit {

    /**
    * Constructor for the component
    * @param grupodeinteresService The grupo' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    /**
    * The new Comentario
    */
    comentario: Comentario;
    
    /**
    * The group id
    */
    grupo_id:Number;

    noticia_id: Number;
   

    /**
    * Cancels the creation of the new Comentario
    * Redirects to the Comentario' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('El comentario no se creo.', 'Creación comentario');
        this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/noticias/' + this.noticia_id + '/comentarios']);
    }

    /**
    * Creates a new Comentario
    */
    createComentario(): Comentario {
       
        this.grupodeinteresService.createComentario(this.grupo_id,this.noticia_id,this.comentario)  .subscribe(comentario => {   this.comentario.id = comentario.id;  
            this.router.navigate(['/gruposdeinteres/'+ this.grupo_id + '/noticias/' + this.noticia_id +'/comentarios']);
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
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        this.noticia_id = +this.route.snapshot.paramMap.get('id2');
        this.comentario = new Comentario();
        
    }

}
