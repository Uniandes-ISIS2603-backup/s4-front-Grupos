import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Noticia } from '../noticia';
import { GrupodeinteresService } from '../grupodeinteres.service';
import { Grupodeinteres } from '../../grupodeinteres/grupodeinteres';
@Component({
    selector: 'app-grupodeinteres-add-noticia',
    templateUrl: './grupodeinteres-add-noticia.component.html',
    styleUrls: ['./grupodeinteres-add-noticia.component.css']
})
export class GrupodeinteresAddNoticiaComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param grupodeinteresService The grupodeinteres service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private toastrService: ToastrService
    ) { }

    /**
    * The grupodeinteres's id
    */
    @Input() grupodeinteres: Grupodeinteres;

    /**
    * The noticia to post
    */
    noticia: Noticia;
    

    /**
    * The Event Emitter which sends the signal when a noticia has just been posted
    * so that the list of noticias refreshes
    */
    @Output() updateNoticias = new EventEmitter();

    /**
    * This function posts a noticia
    * @param noticiaForm The form of the noticia
    */
    postNoticia(noticiaForm: NgForm): Noticia {
        this.noticia.grupodeinteres = this.grupodeinteres;
        this.grupodeinteresService.createNoticia(this.grupodeinteres.id,this.noticia)
            .subscribe(() => {
                noticiaForm.resetForm();
                this.updateNoticias.emit();
                this.toastrService.success("The noticia was successfully created", 'Noticia added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.noticia;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.noticia = new Noticia();
    }

    /**
    * The function which notices that the input which defines the grupodeinteres_id has changed.
    * If the grupodeinteres has changed, we update the noticias to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
