import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocacionService } from '../locacion.service';

import { LocacionDetail } from '../locacion-detail';
import { Locacion } from '../locacion';


@Component({
    selector: 'app-locacion-detail',
    templateUrl: './locacion-detail.component.html',
    styleUrls: ['./locacion-detail.component.css']
})
export class LocacionDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param locacionService The locacion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private locacionService: LocacionService 
    ) { }

    /**
    * The locacion
    */
    locacionDetail: LocacionDetail;

    /**
    * El id del locacion que viene en el path get .../locaciones/locacion_id
    */
    locacion_id: number;
    /**
    * The method which obtains the locacion whose details we want to show
    */
    getLocacionDetail(): void {
        this.locacionService.getLocacionDetail(this.locacion_id).subscribe(locacionDetail => { 
            console.log(locacionDetail);
            this.locacionDetail = locacionDetail });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the locacion so it is never considered as undefined
    */
    ngOnInit() {
        this.locacion_id = +this.route.snapshot.paramMap.get('id');
        
        this.getLocacionDetail();
    }
}

