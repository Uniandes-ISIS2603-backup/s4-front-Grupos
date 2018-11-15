import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {CiudadanoService} from '../ciudadano.service';
import {CiudadanoDetail} from '../ciudadano-detail';
type DateString = {month: number, day: number, year: number};
import {Ciudadano} from '../ciudadano';

@Component({
    selector: 'app-ciudadano-edit',
    templateUrl: './ciudadano-edit.component.html',
    styleUrls: ['./ciudadano-edit.component.css'],
    providers: [DatePipe]
})
export class CiudadanoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param ciudadanoService The ciudadanoes' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private ciudadanoService: CiudadanoService,
        private toastrService: ToastrService,
    ) {}


    @Input() ciudadano: CiudadanoDetail;
    
    @Output() cancel = new EventEmitter();
    
    @Output() update = new EventEmitter();
    
    /**
    * Cancels the creation of the new ciudadano
    * Redirects to the ciudadanoes' list page
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Edits a new ciudadano
    */
    editCiudadano(): void {
        this.ciudadanoService.updateCiudadano(this.ciudadano)
            .subscribe(() => {
                this.toastrService.success("La información del ciudadano fue actualizada", "Edición del ciudadano");
            });
        this.update.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
    }
    
    ngOnChanges() {
        this.ngOnInit();
    }

}
