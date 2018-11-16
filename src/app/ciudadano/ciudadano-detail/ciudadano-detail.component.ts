import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CiudadanoService } from '../ciudadano.service';

import { CiudadanoDetail } from '../ciudadano-detail';
import { Ciudadano } from '../ciudadano';


@Component({
    selector: 'app-ciudadano-detail',
    templateUrl: './ciudadano-detail.component.html',
    styleUrls: ['./ciudadano-detail.component.css']
})
export class CiudadanoDetailComponent implements OnInit {
    
    @Input() ciudadanoDetail: CiudadanoDetail;

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param ciudadanoService The ciudadano's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private ciudadanoService: CiudadanoService 
    ) { }

    /**
    * El id del ciudadano que viene en el path get .../ciudadanos/ciudadano_id
    */
    ciudadano_id: number;
    /**
    * The method which obtains the ciudadano whose details we want to show
    */
    getCiudadanoDetail(): void {
        this.ciudadanoService.getCiudadanoDetail(this.ciudadano_id)
            .subscribe(ciudadanoDetail => {
                this.ciudadanoDetail = ciudadanoDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the ciudadano so it is never considered as undefined
    */
    ngOnInit() {
        this.ciudadano_id = +this.route.snapshot.paramMap.get('id');
        if(this.ciudadano_id)
        {
        this.ciudadanoDetail = new CiudadanoDetail();
        this.getCiudadanoDetail();
        }
    }
}

