import {Component, OnInit} from '@angular/core';

import {AdministradorService} from '../administrador.service';
import {Administrador} from '../administrador';
import {AdministradorDetail} from '../administrador-detail';

/**
* The administrador's list component
*/
@Component({
    selector: 'app-administrador-list',
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
        private administradorService: AdministradorService) {}

    /**
    * The list of administradores which belong to the App
    */
    administradores: Administrador[];

    /**
    * The id of the administrador that the user wants to view
    */
    administrador_id: number;

    /**
    * Shows or hides the administrador-create-component
    */
    showCreate: boolean;

    /**
     * Shows or hides the detail of an administrador
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an administrador
    */
    showEdit: boolean;

    /**
     * the administrador that the user views.
     */
    selectedAdministrador: Administrador;


    /**
    * Shows the administrador
    */
    onSelected(administrador_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.administrador_id = administrador_id;
        this.selectedAdministrador = new AdministradorDetail();
        this.getAdministradorDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(administrador_id: number): void {
        if (!this.showEdit || (this.showEdit && administrador_id != this.selectedAdministrador.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.administrador_id = administrador_id;
            this.selectedAdministrador = new AdministradorDetail();
            this.getAdministradorDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = false;
        }
      
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
    
    updateAdministrador(): void{
        this.showEdit = false;
        this.showView = true;
        this.getAdministradores();
    }
    
    /**
    * This will initialize the component by retrieving the list of administradores from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedAdministrador = undefined;
        this.administrador_id = undefined;
        this.getAdministradores();
    }
}