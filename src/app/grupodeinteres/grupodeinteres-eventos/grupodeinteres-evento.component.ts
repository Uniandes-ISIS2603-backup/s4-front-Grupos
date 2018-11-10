import { Component, OnInit, Input, } from '@angular/core';
import { Evento } from '../evento';

@Component({
    selector: 'app-grupodeinteres-eventos',
    templateUrl: './grupodeinteres-evento.component.html',
})
export class GrupoDeInteresEventoComponent implements OnInit {
    @Input() grupodeinteresEventos : Evento [];
    public isCollapsed = true;
    
    ngOnInit(){
        
    }
}