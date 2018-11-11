import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import { LocacionService } from '../Locacion.service';
type DateString = {month: number, day: number, year: number};

import { LocacionDetail } from '../Locacion-detail';
import { Locacion } from '../Locacion';


@Component({
    selector: 'app-Locacion-create',
    templateUrl: './Locacion-create.component.html',
    styleUrls: ['./Locacion-create.component.css'],
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
        private LocacionService: LocacionService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The Locacion
    */
    Locacion: Locacion;
    
   /**
    * Cancels the creation of the new Locacion
    * Redirects to the Locaciones' list page
    */
    cancelLocacionCreation(): void {
        this.toastrService.warning('La creacion del Locacion ha sido cancelada','Crear Locacion');
        this.router.navigate(['/Locaciones/list']);
    }

    /**
    * Creates a new distrito
    * Redirects to the Locacion detail page
    */
    createLocacion(): Locacion {
       
        this.LocacionService.createLocacion(this.Locacion)   .subscribe(Locacion => {   this.Locacion.id = Locacion.id;  
            this.router.navigate(['/Locaciones/' + Locacion.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.Locacion;
    }
   
    /**
    * The method which initializes the component.
    * We need to create the Locacion so it is never considered as undefined
    */
    ngOnInit() {
        console.log(123);
        this.Locacion= new Locacion();
    }
}

