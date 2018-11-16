import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import { LocacionService } from '../locacion.service';
type DateString = {month: number, day: number, year: number};

import { LocacionDetail } from '../locacion-detail';
import { Locacion } from '../locacion';


@Component({
    selector: 'app-locacion-create',
    templateUrl: './locacion-create.component.html',
    styleUrls: ['./locacion-create.component.css'],
    providers: [DatePipe]
})
export class LocacionCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param LocacionService The Locacion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor( 
        private dp: DatePipe,
        private locacionService: LocacionService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The Locacion
    */
    locacion: Locacion;
    
   /**
    * Cancels the creation of the new Locacion
    * Redirects to the Locaciones' list page
    */
    cancelLocacionCreation(): void {
        this.toastrService.warning('La creacion de la locacion ha sido cancelada','Crear Locacion');
        this.router.navigate(['/locaciones/list']);
    }

    /**
    * Creates a new distrito
    * Redirects to the Locacion detail page
    */
    createLocacion(): Locacion {
       
        this.locacionService.createLocacion(this.locacion , 1)   .subscribe(locacion => {   this.locacion.id = locacion.id;  
            this.router.navigate(['/Locaciones/' + locacion.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.locacion;
    }
   
    /**
    * The method which initializes the component.
    * We need to create the Locacion so it is never considered as undefined
    */
    ngOnInit() {
        console.log(123);
        this.locacion= new Locacion();
    }
}

