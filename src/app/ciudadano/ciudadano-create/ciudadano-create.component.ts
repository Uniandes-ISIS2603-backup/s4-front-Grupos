import {Component, OnInit, Output, EventEmitter} from '@angular/core';
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
    * @param ciudadanoService The ciudadanos' services provider
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
    * The output which tells the parent component
    * that the user no longer wants to create an ciudadano
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new ciudadano
    */
    @Output() create = new EventEmitter();
    
    /**
    * Cancels the creation of the new ciudadano
    * Redirects to the ciudadanoes' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('El ciudadano no fue creaddo', 'Ciudadano creation');
        this.cancel.emit();
        this.router.navigate(['/ciudadanos/list']);
    }

    /**
    * Creates a new ciudadano
    */
    createCiudadano(): Ciudadano {
       
        this.ciudadanoService.createCiudadano(this.ciudadano)
            .subscribe((ciudadano) => {
                this.ciudadano = ciudadano;
                this.create.emit();
                this.toastrService.success("El ciudadano fue creado", "Ciudadano creation");

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
