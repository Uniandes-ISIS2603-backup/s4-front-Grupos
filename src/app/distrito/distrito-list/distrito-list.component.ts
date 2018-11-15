import {Component, OnInit} from '@angular/core';

import {DistritoService} from '../distrito.service';
import {Distrito} from '../distrito';
import {DistritoDetail} from '../distrito-detail';

/**
* The distrito's list component
*/
@Component({
    selector: 'app-distrito-list',
    templateUrl: './distrito-list.component.html',
    styleUrls: ['./distrito-list.component.css']
})
export class DistritoListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param distritoService The distrito's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private distritoService: DistritoService) {}

    /**
    * The list of distritos which belong to the App
    */
    distritos: Distrito[];

    /**
    * The id of the distrito that the user wants to view
    */
    distrito_id: number;

    /**
    * Shows or hides the distrito-create-component
    */
    showCreate: boolean;

    /**
     * Shows or hides the detail of an distrito
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an distrito
    */
    showEdit: boolean;

    /**
     * the distrito that the user views.
     */
    selectedDistrito: Distrito;


    /**
    * Shows the distrito
    */
    onSelected(distrito_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.distrito_id = distrito_id;
        this.selectedDistrito = new DistritoDetail();
        this.getDistritoDetail();
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
    showHideEdit(distrito_id: number): void {
      console.log("que si entra aca")
        if (!this.showEdit || (this.showEdit && distrito_id != this.selectedDistrito.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.distrito_id = distrito_id;
            this.selectedDistrito = new DistritoDetail();
            this.getDistritoDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
      
    }

    /**
    * Asks the service to update the list of distritos
    */
    getDistritos(): void {
        this.distritoService.getDistritos()
            .subscribe(distritos => {
                this.distritos = distritos;
            });
    }

    getDistritoDetail(): void {
        this.distritoService.getDistritoDetail(this.distrito_id)
            .subscribe(selectedDistrito => {
                this.selectedDistrito = selectedDistrito
            });
    }
    
    updateDistrito(): void{
        this.showEdit = false;
        this.showView = true;
    }
    
    /**
    * This will initialize the component by retrieving the list of distritos from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedDistrito = undefined;
        this.distrito_id = undefined;
        this.getDistritos();
    }
}