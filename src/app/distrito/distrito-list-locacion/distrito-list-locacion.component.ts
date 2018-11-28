import { Component, OnInit, Input, } from '@angular/core';
import { Locacion } from '../locacion';

import { ActivatedRoute } from '@angular/router';
import {DistritoService} from '../distrito.service';
@Component({
    selector: 'app-distrito-list-locaciones',
    templateUrl: './distrito-list-locacion.component.html',
})
export class DistritoListLocacionComponent implements OnInit {
    locaciones : Locacion[];
    /**
    * El id del distrito que viene en el path get .../locaciones/_id
    */
  @Input() distrito_id: number;
    constructor(
        private distritoService: DistritoService,
        private route: ActivatedRoute,
    ) {}
    
    /**
    * The method which obtains the locacion whose details we want to show
    */
   getLocaciones(): void {
    this.distritoService.getLocaciones(this.distrito_id).subscribe(locaciones => { 
        
        this.locaciones = locaciones });
}

 
    
    ngOnInit(){
       
        this.getLocaciones();
    }


}



