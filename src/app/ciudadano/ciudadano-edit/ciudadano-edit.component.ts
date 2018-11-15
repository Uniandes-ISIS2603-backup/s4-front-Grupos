import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
//import {Router} from '@angular/router';
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
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private ciudadanoService: CiudadanoService,
        private toastrService: ToastrService,
//        private router: Router
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
//        let dateB: Date = new Date(this.author.birthDate.year, this.author.birthDate.month - 1, this.author.birthDate.day);
//        this.ciudadano.birthDate = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.ciudadanoService.updateCiudadano(this.ciudadano)
            .subscribe(() => {
                this.toastrService.success("The ciudadano's information was updated", "Ciudadano edition");
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
