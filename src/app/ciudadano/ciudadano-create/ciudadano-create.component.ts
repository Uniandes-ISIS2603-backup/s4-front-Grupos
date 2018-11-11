import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {CiudadanoService} from '../ciudadano.service';
type DateString = {month: number, day: number, year: number};
import {Ciudadano} from '../ciudadano';

@Component({
    selector: 'app-ciudadano-create',
    templateUrl: './ciudadano-create.component.html',
    styleUrls: ['./ciudadano-create.component.css'],
    providers: [DatePipe]
})
export class CiudadanoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param ciudadanoService The ciudadanoes' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private ciudadanoService: CiudadanoService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new ciudadano
    */
    ciudadano: Ciudadano;
    /**
    * Cancels the creation of the new ciudadano
    * Redirects to the ciudadanoes' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The ciudadano wasn\'t created', 'Ciudadano creation');
        this.router.navigate(['/ciudadanos/list']);
    }

    /**
    * Creates a new ciudadano
    */
    createCiudadano(): Ciudadano {
       
        this.ciudadanoService.createCiudadano(this.ciudadano)   .subscribe(ciudadano => {   this.ciudadano.id = ciudadano.id;  
            this.router.navigate(['/ciudadanos/' + ciudadano.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.ciudadano;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log(123);
        this.ciudadano = new Ciudadano();
        
    }

}
