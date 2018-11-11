import { Component, OnInit, Input, } from '@angular/core';
import { Evento } from '../evento';

import { ActivatedRoute } from '@angular/router';
import {GrupodeinteresService} from '../grupodeinteres.service';
@Component({
    selector: 'app-grupodeinteres-eventos',
    templateUrl: './grupodeinteres-evento.component.html',
})
export class GrupodeinteresEventoComponent implements OnInit {
    @Input() eventos : Evento[];
    /**
    * El id del grupo que viene en el path get .../eventos/_id
    */
   grupo_id: number;
    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private route: ActivatedRoute,
    ) {}
    
    /**
    * The method which obtains the evento whose details we want to show
    */
   getEventos(): void {
    this.grupodeinteresService.getEventos(this.grupo_id).subscribe(eventos => { 
        
        this.eventos = eventos });
}
    
    ngOnInit(){
        console.log("eventos");
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id');
        this.getEventos();
    }


}



