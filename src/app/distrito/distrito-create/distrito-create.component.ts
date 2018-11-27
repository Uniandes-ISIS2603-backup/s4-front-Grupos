import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {DistritoService} from '../distrito.service';
import {Distrito} from '../distrito';

@Component({
    selector: 'app-distrito-create',
    templateUrl: './distrito-create.component.html',
    styleUrls: ['./distrito-create.component.css'],
    providers: []
})
export class DistritoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param distritoService The distritos' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private distritoService: DistritoService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new distrito
    */
    distrito: Distrito;

    @Output() cancel = new EventEmitter();
   
    @Output() create = new EventEmitter();

    /**
    * Cancels the creation of the new distrito
    * Redirects to the distritos' list page
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Creates a new distrito
    */
    createDistrito(): Distrito {
       
        this.distritoService.createDistrito(this.distrito)   .subscribe(distrito => {   this.distrito.id = distrito.id;  
            this.router.navigate(['/distritos/list']);
            this.toastrService.success("The distrito's information was created", "Distrito creation");
            this.create.emit();    
        }, err => {
                this.toastrService.error(err, 'Error');
                
        });
        return this.distrito;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.distrito = new Distrito();
        
    }

}
