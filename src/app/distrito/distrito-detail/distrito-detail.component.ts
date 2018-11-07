import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DistritoService } from '../distrito.service';

import { DistritoDetail } from '../distrito-detail';
import { Distrito } from '../distrito';


@Component({
    selector: 'app-distrito-detail',
    templateUrl: './distrito-detail.component.html',
    styleUrls: ['./distrito-detail.component.css']
})
export class DistritoDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param distritoService The distrito's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private distritoService: DistritoService 
    ) { }

    /**
    * The distrito
    */
    distritoDetail: DistritoDetail;

    /**
    * El id del distrito que viene en el path get .../distritos/distrito_id
    */
    distrito_id: number;
    /**
    * The method which obtains the distrito whose details we want to show
    */
    getDistritoDetail(): void {
        this.distritoService.getDistritoDetail(this.distrito_id).subscribe(distritoDetail => { 
            console.log(distritoDetail);
            this.distritoDetail = distritoDetail });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the distrito so it is never considered as undefined
    */
    ngOnInit() {
        this.distrito_id = +this.route.snapshot.paramMap.get('id');
        
        this.getDistritoDetail();
    }
}

