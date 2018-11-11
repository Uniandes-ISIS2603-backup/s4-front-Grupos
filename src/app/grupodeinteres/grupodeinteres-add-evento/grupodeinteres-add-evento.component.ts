import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Evento} from '../evento';

@Component({
    selector: 'app-grupodeinteres-add-evento',
    templateUrl: './grupodeinteres-add-evento.component.html',
})
export class GrupodeinteresAddEventoComponent implements OnInit {

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
    * The new evento
    */
    evento: Evento;
    
    /**
    * The group id
    */
    grupo_id:Number;

  
   

    /**
    * Cancels the creation of the new evento
    * Redirects to the evento' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The evento wasn\'t created', 'Grupodeinteres creation');
        this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/list']);
    }

    /**
    * Creates a new evento
    */
    createEvento(): Evento {
       
        this.grupodeinteresService.createEvento(this.grupo_id,this.evento)  .subscribe(evento => {   this.evento.id = evento.id;  
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
        console.log(123);
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id');
        this.evento = new Evento();
        
    }

}
