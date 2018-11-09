import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import { PatrocinioService } from '../patrocinio.service';
type DateString = {month: number, day: number, year: number};

import { PatrocinioDetail } from '../patrocinio-detail';
import { Patrocinio } from '../patrocinio';


@Component({
    selector: 'app-patrocinio-create',
    templateUrl: './patrocinio-create.component.html',
    styleUrls: ['./patrocinio-create.component.css'],
    providers: [DatePipe]
})
export class PatrocinioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param patrocinioService The patrocinio's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor( 
        private dp: DatePipe,
        private patrocinioService: PatrocinioService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The patrocinio
    */
    patrocinio: Patrocinio;
    
   /**
    * Cancels the creation of the new patrocinio
    * Redirects to the patrocinios' list page
    */
    cancelPatrocinioCreation(): void {
        this.toastrService.warning('La creacion del patrocinio ha sido cancelada','Crear patrocinio');
        this.router.navigate(['/patrocinios/list']);
    }

    /**
    * Creates a new distrito
    * Redirects to the patrocinio detail page
    */
    createPatrocinio(): Patrocinio {
       
        this.patrocinioService.createPatrocinio(this.patrocinio)   .subscribe(patrocinio => {   this.patrocinio.id = patrocinio.id;  
            this.router.navigate(['/patrocinios/' + patrocinio.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.patrocinio;
    }
   
    /**
    * The method which initializes the component.
    * We need to create the patrocinio so it is never considered as undefined
    */
    ngOnInit() {
        console.log(123);
        this.patrocinio= new Patrocinio();
    }
}

