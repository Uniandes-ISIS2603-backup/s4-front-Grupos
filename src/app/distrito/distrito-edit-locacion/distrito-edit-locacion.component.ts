import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {DistritoService} from '../distrito.service';
import {Locacion} from '../locacion';

@Component({
    selector: 'app-distrito-edit-locacion',
    templateUrl: './distrito-edit-locacion.component.html',
    providers: []
})
export class DistritoEditLocacionComponent implements OnInit {

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
    * The  locacion to edit
    */
   locacion: Locacion;
    /**
    * The locacion's id retrieved from the path
    */
   locacion_id: number;
    
    /**
    * The group id
    */
    distrito_id:Number;

  
   

    /**
    * Cancels the creation of the new locacion
    * Redirects to the locacion' list page
    */
    cancelUpdate(): void {
        this.toastrService.warning('The locacion wasn\'t edited', 'Distrito edition');
        this.router.navigate(['/distritos/list']);
    }
/**
    * The method which retrieves the details of the distrito that
    * we want to show
    */
   getLocacionDetail(): void {
    this.distritoService.getLocacionDetail(this.distrito_id,this.locacion_id)
        .subscribe(locacion => {
            this.locacion = locacion;
        });
}
    /**
    * Creates a new locacion
    */
    updateLocacion(): Locacion {
       
        this.distritoService.updateLocacion(this.distrito_id,this.locacion)  .subscribe(locacion => {   this.locacion.id = locacion.id;  
            this.router.navigate(['/distritos/list']);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.locacion;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
        this.distrito_id = +this.route.snapshot.paramMap.get('id1');
        
        this.locacion_id = +this.route.snapshot.paramMap.get('id2');
        this.locacion = new Locacion();
        this.getLocacionDetail();
        
        
        
    }

}
