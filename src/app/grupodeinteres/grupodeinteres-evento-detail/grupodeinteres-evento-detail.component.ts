import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Evento} from '../evento';

@Component({
    selector: 'app-grupodeinteres-evento-detail',
    templateUrl: './grupodeinteres-evento-detail.component.html',
    providers: []
})
export class GrupodeinteresEventoDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param grupodeinteresService The grupo' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) {}

    /**
    * The  evento to detail
    */
   evento: Evento;
    /**
    * The evento's id retrieved from the path
    */
   evento_id: number;
    
    /**
    * The group id
    */
    grupo_id:Number;

  
   
/**
    * The method which retrieves the details of the grupodeinteres that
    * we want to show
    */
   getEventoDetail(): void {
    this.grupodeinteresService.getEventoDetail(this.grupo_id,this.evento_id)
        .subscribe(evento => {
            this.evento = evento;
        });
}
   

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        console.log(this.grupo_id + ' grupo')
        this.evento_id = +this.route.snapshot.paramMap.get('id2');
        console.log(this.evento_id + ' evento')
        this.evento = new Evento();
        this.getEventoDetail();
        
        
        
    }

}
