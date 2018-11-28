import { Component, OnInit, Input, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GrupodeinteresService} from '../grupodeinteres.service';
import { Comentario } from '../comentario';
import { Noticia } from '../noticia';

@Component({
    selector: 'app-grupodeinteres-noticias-comentarios',
    templateUrl: './grupodeinteres-noticias-comentarios.component.html',
})
export class GrupodeinteresNoticiaComentarioComponent implements OnInit {
    
    @Input() comentarios : Comentario[];
    @Input() noticia: Noticia;
    /**
    * El id del grupo que viene en el path get .../noticias/id
    */
   grupo_id: number;

   noticia_id: number;

    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private route: ActivatedRoute,
    ) {}
    
    /**
    * The method which obtains the noticia whose details we want to show
    */
   getComentarios(): void {
    this.grupodeinteresService.getComentarios(this.grupo_id, this.noticia_id).subscribe(comentarios => { 
        
        this.comentarios = comentarios });
}

 
    
    ngOnInit(){
        console.log("comentarios");
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        this.noticia_id = +this.route.snapshot.paramMap.get('id2');
        this.getComentarios();
    }


}



