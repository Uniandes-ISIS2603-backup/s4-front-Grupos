import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Comentario} from '../comentario';

@Component({
    selector: 'app-grupodeinteres-noticias-edit-comentario',
    templateUrl: './gruposdeinteres-noticias-edit-comentario.component.html',
    providers: []
})
export class GrupodeinteresNoticiasEditComentarioComponent implements OnInit {

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
    * The  noticia to edit
    */
   comentario: Comentario;

   comentario_id: number;
    /**
    * The noticia's id retrieved from the path
    */
   noticia_id: number;
    
    /**
    * The group id
    */
    grupo_id:Number;

  
   

    /**
    * Cancels the creation of the new noticia
    * Redirects to the noticia' list page
    */
    cancelUpdate(): void {
        this.toastrService.warning('El comentario no fue actualizado.', 'Comentario edition');
        this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/noticias/' + this.noticia_id + '/comentarios']);
    }

    getComentarioDetail(): void {
        this.grupodeinteresService.getComentarioDetail(this.grupo_id,this.noticia_id, this.comentario_id)
            .subscribe(comentarios => {
                this.comentario = comentarios;
            });
    }

    /**
    * Creates a new noticia
    */
    updateComentario(): Comentario {
       
        this.grupodeinteresService.updateComentario(this.grupo_id,this.noticia_id, this.comentario)  .subscribe(comentario => {   this.comentario.id = comentario.id;  
            this.router.navigate(['/gruposdeinteres/'+ this.grupo_id+ '/noticias/' + this.noticia_id + '/comentarios']);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.comentario;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        
        this.noticia_id = +this.route.snapshot.paramMap.get('id2');
        this.comentario_id = +this.route.snapshot.paramMap.get('id3');
        this.comentario = new Comentario();
        this.getComentarioDetail();
    }

}
