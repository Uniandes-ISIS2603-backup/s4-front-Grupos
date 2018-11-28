import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {AdministradorService} from '../administrador.service';
import {AdministradorDetail} from '../administrador-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-administrador-edit',
    templateUrl: './administrador-edit.component.html',
    styleUrls: ['./administrador-edit.component.css'],
    providers: []
})
export class AdministradorEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param administradorService The administradores' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
       
        private administradorService: AdministradorService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The administrador id as received from the parent component
    */
    @Input() administrador: AdministradorDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an administrador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new administrador
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the administrador
    */
    editAdministrador(): void {
        ;
        this.administradorService.updateAdministrador(this.administrador)
            .subscribe(() => {
                this.toastrService.success("The administrador's information was updated", "Administrador edition");
                this.update.emit();
            });
        
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
      
    }

    /**
    * This function will be called when the user chooses another administrador to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
