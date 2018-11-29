import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {DistritoService} from '../distrito.service';
import {Locacion} from '../locacion';

@Component({
    selector: 'app-distrito-add-locacion',
    templateUrl: './distrito-add-locacion.component.html',
    providers: []
})
export class DistritoAddLocacionComponent implements OnInit {

    /**
    * Constructor for the component
    * @param distritoService The distrito' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private distritoService: DistritoService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    /**
    * The new locacion
    */
    locacion: Locacion;
    
    /**
    * The group id
    */
    distrito_id:Number;

  
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an distrito
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new distrito
   */
   @Output() update = new EventEmitter();

    /**
    * Cancels the creation of the new locacion
    * Redirects to the locacion' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The locacion wasn\'t created', 'Distrito creation');
        this.router.navigate(['/distritos/list']);
    }

    /**
    * Creates a new locacion
    */
    createLocacion(): Locacion {
       
        this.distritoService.createLocacion(this.distrito_id,this.locacion)  .subscribe(locacion => {   this.locacion.id = locacion.id;  
            this.router.navigate(['/distritos/'+ this.distrito_id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.locacion;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log(123);
        
        this.distrito_id = +this.route.snapshot.paramMap.get('id');
        this.locacion = new Locacion();
        
    }

}
