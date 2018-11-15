import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CiudadanoService } from '../ciudadano.service';
import { CiudadanoDetail } from '../ciudadano-detail';
import { Ciudadano } from '../ciudadano';
 
@Component({
    selector: 'app-ciudadano',
    templateUrl: './ciudadano-list.component.html',
    styleUrls: ['./ciudadano-list.component.css']
})

export class CiudadanoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param ciudadanoService The ciudadano's services provider
     */
    constructor(private ciudadanoService: CiudadanoService) { }
    
    /**
     * The list of ciudadanos which belong to the GruposDeInteres
     */
    ciudadanos: Ciudadano[];
    
    ciudadano_id: number;
    
    showCreate: boolean;
    
    showView: boolean;
    
    showEdit: boolean;
    
    selectedCiudadano: Ciudadano;
    
        /**
    * Shows the ciudadano
    */
    onSelected(ciudadano_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.ciudadano_id = ciudadano_id;
        this.selectedCiudadano = new CiudadanoDetail();
        this.getCiudadanoDetail();
    }
    
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
    /**
    * Shows or hides the create component
    */
    showHideEdit(ciudadano_id: number): void {
        if (!this.showEdit || (this.showEdit && ciudadano_id != this.selectedCiudadano.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.ciudadano_id = ciudadano_id;
            this.selectedCiudadano = new CiudadanoDetail();
            this.getCiudadanoDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }

    /**
     * Asks the service to update the list of ciudadanos
     */
    getCiudadanos(): void {
        this.ciudadanoService.getCiudadanos()
            .subscribe(ciudadanos => this.ciudadanos = ciudadanos);
    }

    getCiudadanoDetail(): void {
        this.ciudadanoService.getCiudadanoDetail(this.ciudadano_id)
            .subscribe(selectedCiudadano => {
                this.selectedCiudadano = selectedCiudadano
            });
    }
    
    updateCiudadano(): void{
        this.showEdit = false;
        this.showView = true;
    }
    
    /**
     * This will initialize the component by retrieving the list of ciudadanos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedCiudadano = undefined;
        this.ciudadano_id = undefined;
        this.getCiudadanos();
    }

}

