import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdministradorService } from '../administrador.service';

import { AdministradorDetail } from '../administrador-detail';


@Component({
    selector: 'app-administrador-detail',
    templateUrl: './administrador-detail.component.html',
    styleUrls: ['./administrador-detail.component.css']
})
export class AdministradorDetailComponent implements OnInit {
    
    @Input() administradorDetail: AdministradorDetail;

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param administradorService The administrador's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private administradorService: AdministradorService 
    ) { }

    /**
    * El id del administrador que viene en el path get .../administradores/administrador_id
    */
    administrador_id: number;
    /**
    * The method which obtains the administrador whose details we want to show
    */
    getAdministradorDetail(): void {
        this.administradorService.getAdministradorDetail(this.administrador_id)
            .subscribe(administradorDetail => {
                this.administradorDetail = administradorDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the administrador so it is never considered as undefined
    */
    ngOnInit() {
        this.administrador_id = +this.route.snapshot.paramMap.get('id');
        if(this.administrador_id)
        {
        this.administradorDetail = new AdministradorDetail();
        this.getAdministradorDetail();
        }
    }
}

