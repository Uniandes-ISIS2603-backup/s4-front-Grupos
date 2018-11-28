import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {DistritoService} from '../distrito.service';
import {DistritoDetail} from '../distrito-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-distrito-edit',
    templateUrl: './distrito-edit.component.html',
    styleUrls: ['./distrito-edit.component.css'],
    providers: []
})
export class DistritoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param distritoService The distritos' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
       
        private distritoService: DistritoService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The distrito id as received from the parent component
    */
    @Input() distrito: DistritoDetail;

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
    * Updates the information of the distrito
    */
    editDistrito(): void {
        console.log(this.distrito);
        this.distritoService.updateDistrito(this.distrito)
            .subscribe(() => {
                this.toastrService.success("The distrito's information was updated", "Distrito edition");
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
    * This function will be called when the user chooses another distrito to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
