import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Noticia} from '../noticia';

@Component({
    selector: 'app-grupodeinteres-add-noticia',
    templateUrl: './grupodeinteres-add-noticia.component.html',
    providers: [DatePipe]
})
export class GrupodeinteresAddNoticiaComponent implements OnInit {

    /**
    * Constructor for the component
    * @param grupodeinteresService The grupo' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private grupodeinteresService: GrupodeinteresService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    /**
    * The new noticia
    */
    noticia: Noticia;
    
    /**
    * The group id
    */
    grupo_id:Number;

  
   

    /**
    * Cancels the creation of the new noticia
    * Redirects to the noticia' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The noticia wasn\'t created', 'Grupodeinteres creation');
        this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/list']);
    }

    /**
    * Creates a new noticia
    */
    createNoticia(): Noticia {
       
        this.grupodeinteresService.createNoticia(this.grupo_id,this.noticia)  .subscribe(noticia => {   this.noticia.id = noticia.id;  
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
        console.log(123);
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id');
        this.noticia = new Noticia();
        
    }

}
