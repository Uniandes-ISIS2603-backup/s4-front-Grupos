import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {AdministradorService} from '../administrador.service';
type DateString = {month: number, day: number, year: number};
import {Administrador} from '../administrador';

@Component({
    selector: 'app-administrador-create',
    templateUrl: './administrador-create.component.html',
    styleUrls: ['./administrador-create.component.css'],
    providers: [DatePipe]
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
        private dp: DatePipe,
        private administradorService: AdministradorService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new administrador
    */
    administrador: Administrador;
    /**
    * Cancels the creation of the new administrador
    * Redirects to the administradores' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The administrador wasn\'t created', 'Administrador creation');
        this.router.navigate(['/administradores/list']);
    }

    /**
    * Creates a new administrador
    */
    createAdministrador(): Administrador {
       
        this.administradorService.createAdministrador(this.administrador)   .subscribe(administrador => {   this.administrador.id = administrador.id;  
            this.router.navigate(['/administradores/' + administrador.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.administrador;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log(123);
        this.administrador = new Administrador();
        
    }

}
