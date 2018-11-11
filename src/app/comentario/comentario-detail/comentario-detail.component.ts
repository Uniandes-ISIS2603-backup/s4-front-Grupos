import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComentarioService } from '../comentario.service';

import { ComentarioDetail } from '../comentario-detail';
import { Comentario } from '../comentario';


@Component({
    selector: 'app-comentario-detail',
    templateUrl: './comentario-detail.component.html',
    styleUrls: ['./comentario-detail.component.css']
})
export class ComentarioDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param comentarioService The comentario's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private comentarioService: ComentarioService 
    ) { }

    /**
    * The comentario
    */
    comentarioDetail: ComentarioDetail;

    /**
    * El id del comentario que viene en el path get .../comentarios/comentario_id
    */
    comentario_id: number;
    /**
    * The method which obtains the comentario whose details we want to show
    */
    getComentarioDetail(): void {
        this.comentarioService.getComentarioDetail(this.comentario_id)
            .subscribe(comentarioDetail => {
                this.comentarioDetail = comentarioDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the comentario so it is never considered as undefined
    */
    ngOnInit() {
        this.comentario_id = +this.route.snapshot.paramMap.get('id');
        this.comentarioDetail = new ComentarioDetail();
        this.getComentarioDetail();
    }
}

