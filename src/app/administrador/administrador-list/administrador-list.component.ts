import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador';
import { AdministradorDetail } from '../administrador-detail';

/**
* The administrador's list component
*/
@Component({
    selector: 'app-administrador',
    templateUrl: './administrador-list.component.html',
    styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param administradorService The administrador's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private administradorService: AdministradorService) { }

    /**
    * The list of administradores which belong to the BookStore
    */
    administradores: Administrador[];
    administrador_id: number;
    selectedAdministrador : Administrador;
    
    onSelected(administrador_id: number):void {
        this.administrador_id = administrador_id;
        this.selectedAdministrador = new AdministradorDetail();
        this.getAdministradorDetail();

        
    }
    /**
    * Asks the service to update the list of administradores
    */
    getAdministradores(): void {
        this.administradorService.getAdministradores()
            .subscribe(administradores => {
                this.administradores = administradores;
            });
    }

      getAdministradorDetail(): void {
        this.administradorService.getAdministradorDetail(this.administrador_id)
            .subscribe(selectedAdministrador => {
                this.selectedAdministrador = selectedAdministrador
            });
    }
    /**
    * This will initialize the component by retrieving the list of administradores from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getAdministradores();
    }

}