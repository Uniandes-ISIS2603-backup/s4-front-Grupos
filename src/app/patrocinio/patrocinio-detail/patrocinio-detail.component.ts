import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PatrocinioService } from '../patrocinio.service';

import { PatrocinioDetail } from '../patrocinio-detail';
import { Patrocinio } from '../patrocinio';


@Component({
    selector: 'app-patrocinio-detail',
    templateUrl: './patrocinio-detail.component.html',
    styleUrls: ['./patrocinio-detail.component.css']
})
export class PatrocinioDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param patrocinioService The patrocinio's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private patrocinioService: PatrocinioService 
    ) { }

    /**
    * The patrocinio
    */
    patrocinioDetail: PatrocinioDetail;

    /**
    * El id del patrocinio que viene en el path get .../patrocinios/patrocinio_id
    */
    patrocinio_id: number;
    /**
    * The method which obtains the patrocinio whose details we want to show
    */
    getPatrocinioDetail(): void {
        this.patrocinioService.getPatrocinioDetail(this.patrocinio_id).subscribe(patrocinioDetail => { 
            console.log(patrocinioDetail);
            this.patrocinioDetail = patrocinioDetail });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the patrocinio so it is never considered as undefined
    */
    ngOnInit() {
        this.patrocinio_id = +this.route.snapshot.paramMap.get('id');
        
        this.getPatrocinioDetail();
    }
}

