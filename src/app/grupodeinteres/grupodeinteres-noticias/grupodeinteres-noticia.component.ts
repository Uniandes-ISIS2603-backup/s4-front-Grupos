import { Component, OnInit, Input, } from '@angular/core';
import { Noticia } from '../noticia';

@Component({
    selector: 'app-grupodeinteres-noticias',
    templateUrl: './grupodeinteres-noticia.component.html',
})
export class GrupoNoticiaComponent implements OnInit {
    @Input() grupodeinteresNoticias : Noticia[];
    
    public isCollapsed = false;
    
    /**
     * The function called when a noticia is posted to update the noticias
     */
    updateNoticias(noticias:Noticia[]): void {
        this.grupodeinteresNoticias = noticias;
    }
    
    ngOnInit(){
        console.log(this);
    }


}



