import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocacionService } from '../locacion.service';
import { ToastrService } from 'ngx-toastr';
import { Locacion } from '../locacion';
 
@Component({
    selector: 'app-locacion.list',
    templateUrl: './locacion-list.component.html',
    styleUrls: ['./locacion-list.component.css']
})

export class LocacionListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param locacionService The locacion's services provider
     */
    constructor(private locacionService: LocacionService) { }
    
    /**
     * The list of locaciones which belong to the GruposDeInteres
     */
    locaciones: Locacion[];

    /**
     * Asks the service to update the list of  locaciones
     */
    getLocacions(): void {
        this.locacionService.getLocacions().subscribe(locaciones => this.locaciones = locaciones);
    }

    /**
     * This will initialize the component by retrieving the list of ciudadanos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getLocacions();
    }

}

