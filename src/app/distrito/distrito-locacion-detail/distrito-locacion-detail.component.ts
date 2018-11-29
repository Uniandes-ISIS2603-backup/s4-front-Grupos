import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {DistritoService} from '../distrito.service';
import {Locacion} from '../locacion';

@Component({
    selector: 'app-distrito-locacion-detail',
    templateUrl: './distrito-locacion-detail.component.html',
    providers: []
})
export class DistritoLocacionDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param distritoService The distrito' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private distritoService: DistritoService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) {}

    /**
    * The  locacion to detail
    */
   locacion: Locacion;
    /**
    * The locacion's id retrieved from the path
    */
   locacion_id: number;
    
    /**
    * The group id
    */
    distrito_id:Number;

  
   
/**
    * The method which retrieves the details of the distrito that
    * we want to show
    */
   getLocacionDetail(): void {
    this.distritoService.getLocacionDetail(this.distrito_id,this.locacion_id)
        .subscribe(locacion => {
            this.locacion = locacion;
        });
}
   

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
        this.distrito_id = +this.route.snapshot.paramMap.get('id1');
        console.log(this.distrito_id + ' distrito')
        this.locacion_id = +this.route.snapshot.paramMap.get('id2');
        console.log(this.locacion_id + ' locacion')
        this.locacion = new Locacion();
        this.getLocacionDetail();
        
        
        
    }

}
