import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Evento} from '../evento';

@Component({
    selector: 'app-grupodeinteres-edit-evento',
    templateUrl: './grupodeinteres-edit-evento.component.html',
    providers: []
})
export class GrupodeinteresEditEventoComponent implements OnInit {

    /**
    * Constructor for the component
    * @param grupodeinteresService The grupo' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    /**
    * The  evento to edit
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
    * Cancels the creation of the new evento
    * Redirects to the evento' list page
    */
    cancelUpdate(): void {
        this.toastrService.warning('The evento wasn\'t edited', 'Grupodeinteres edition');
        this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/eventos']);
    }
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
    * Creates a new evento
    */
    updateEvento(): Evento {
       
        this.grupodeinteresService.updateEvento(this.grupo_id,this.evento)  .subscribe(evento => {   this.evento.id = evento.id;  
            this.router.navigate(['/gruposdeinteres/'+ this.grupo_id+ '/eventos']);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.evento;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        
        this.evento_id = +this.route.snapshot.paramMap.get('id2');
        this.evento = new Evento();
        this.getEventoDetail();
        
        
        
    }

}
