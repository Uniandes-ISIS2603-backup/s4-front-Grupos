import { Component, OnInit, Input, } from '@angular/core';
import { Noticia } from '../noticia';

import { ActivatedRoute } from '@angular/router';
import {GrupodeinteresService} from '../grupodeinteres.service';
@Component({
    selector: 'app-grupodeinteres-noticias',
    templateUrl: './grupodeinteres-noticia.component.html',
})
export class GrupodeinteresNoticiaComponent implements OnInit {
    @Input() noticias : Noticia[];
    /**
    * El id del grupo que viene en el path get .../noticias/_id
    */
   grupo_id: number;
    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private route: ActivatedRoute,
    ) {}
    
    /**
    * The method which obtains the noticia whose details we want to show
    */
   getNoticias(): void {
    this.grupodeinteresService.getNoticias(this.grupo_id).subscribe(noticias => { 
        
        this.noticias = noticias });
}
    
    ngOnInit(){
        console.log("moticias");
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id');
        this.getNoticias();
    }


}



