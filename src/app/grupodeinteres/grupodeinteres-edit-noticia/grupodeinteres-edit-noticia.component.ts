import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Noticia} from '../noticia';

@Component({
    selector: 'app-grupodeinteres-edit-noticia',
    templateUrl: './grupodeinteres-edit-noticia.component.html',
    providers: []
})
export class GrupodeinteresEditNoticiaComponent implements OnInit {

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
   noticia: Noticia;
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
        this.toastrService.warning('The noticia wasn\'t edited', 'Grupodeinteres edition');
        this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/noticias']);
    }
/**
    * The method which retrieves the details of the grupodeinteres that
    * we want to show
    */
   getNoticiaDetail(): void {
    this.grupodeinteresService.getNoticiaDetail(this.grupo_id,this.noticia_id)
        .subscribe(noticia => {
            this.noticia = noticia;
        });
}
    /**
    * Creates a new noticia
    */
    updateNoticia(): Noticia {
       
        this.grupodeinteresService.updateNoticia(this.grupo_id,this.noticia)  .subscribe(noticia => {   this.noticia.id = noticia.id;  
            this.router.navigate(['/gruposdeinteres/'+ this.grupo_id+ '/noticias']);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.noticia;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        
        this.noticia_id = +this.route.snapshot.paramMap.get('id2');
        this.noticia = new Noticia();
        this.getNoticiaDetail();
        
        
        
    }

}
