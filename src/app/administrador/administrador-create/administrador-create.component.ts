import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {AdministradorService} from '../administrador.service';
import {Administrador} from '../administrador';

@Component({
    selector: 'app-administrador-create',
    templateUrl: './administrador-create.component.html',
    styleUrls: ['./administrador-create.component.css'],
    providers: []
})
export class AdministradorCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param administradorService The administradores' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private administradorService: AdministradorService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new administrador
    */
    administrador: Administrador;

    @Output() cancel = new EventEmitter();
   
    @Output() create = new EventEmitter();

    /**
    * Cancels the creation of the new administrador
    * Redirects to the administradores' list page
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Creates a new administrador
    */
    createAdministrador(): Administrador {
       
        this.administradorService.createAdministrador(this.administrador)   .subscribe(administrador => {   this.administrador.id = administrador.id;  
            this.router.navigate(['/administradores/list']);
            this.toastrService.success("The administrador's information was created", "Administrador creation");
            this.create.emit();    
        }, err => {
                this.toastrService.error(err, 'Error');
                
        });
        return this.administrador;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.administrador = new Administrador();
        
    }

}
