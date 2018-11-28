import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupodeinteresService } from '../grupodeinteres.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-grupodeinteres-noticias-delete-comentario',
    templateUrl: './grupodeinteres-noticias-delete-comentario.component.html',
    styleUrls: ['./grupodeinteres-noticias-delete-comentario.component.css']
})
export class GrupodeinteresNoticiaDeleteComentarioComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param grupoService The distrito's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private grupoService: GrupodeinteresService,
        
        private toastrService: ToastrService,
        private router: Router
    ) { }

    comentario_id: number;


    /**
    * El id de la noticia que viene en el path get .../grupos/grupo_id/noticis/noticia_id
    */
    noticia_id: number;
    /**
    * El id del grupo que viene en el path get ...grupos/grupo_id/noticis/noticia_id
    */
   grupo_id: number;
    /**
    * The method which obtains the distrito whose deletes we want to show
    */
    deleteComentario(): void {
        this.grupoService.deleteComentario(this.grupo_id, this.noticia_id, this.comentario_id)
            .subscribe(comentario=>{this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/noticias/' + this.noticia_id + '/comentarios']);
            this.toastrService.success("El comentario fue eliminado correctamente", "Comentario eliminado")});
    }


    /**
    * The method which initializes the component.
    * We need to delete the distrito so it is never considered as undefined
    */
    ngOnInit() {
        this.comentario_id = +this.route.snapshot.paramMap.get('id3');
        this.noticia_id = +this.route.snapshot.paramMap.get('id2');
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        if (this.grupo_id&&this.noticia_id&&this.comentario_id) {
            this.deleteComentario();
        }
    }
}
