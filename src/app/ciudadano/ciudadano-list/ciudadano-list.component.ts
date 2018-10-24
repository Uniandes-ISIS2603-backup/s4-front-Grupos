import { Component, OnInit } from '@angular/core';
import { CiudadanoService } from '../ciudadano.service';
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

    /**
     * Asks the service to update the list of ciudadanos
     */
    getCiudadanos(): void {
        this.ciudadanoService.getCiudadanos()
            .subscribe(ciudadanos => this.ciudadanos = ciudadanos);
    }

    /**
     * This will initialize the component by retrieving the list of ciudadanos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getCiudadanos();
    }

}

