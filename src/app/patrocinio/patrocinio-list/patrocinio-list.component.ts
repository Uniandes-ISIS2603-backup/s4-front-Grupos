import { Component, OnInit } from '@angular/core';
import { PatrocinioService } from '../patrocinio.service';
import { Patrocinio } from '../patrocinio';
 
@Component({
    selector: 'app-patrocinio',
    templateUrl: './patrocinio-list.component.html',
    styleUrls: ['./patrocinio-list.component.css']
})

export class PatrocinioListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param patrocinioService The patrocinio's services provider
     */
    constructor(private patrocinioService: PatrocinioService) { }
    
    /**
     * The list of patrocinios which belong to the GruposDeInteres
     */
    patrocinios: Patrocinio[];

    /**
     * Asks the service to update the list of  patrocinios
     */
    getPatrocinios(): void {
        this.patrocinioService.getPatrocinios().subscribe(patrocinios => this.patrocinios = patrocinios);
    }

    /**
     * This will initialize the component by retrieving the list of ciudadanos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getPatrocinios();
    }

}

