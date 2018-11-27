import { Component, OnInit } from '@angular/core';
import {GrupodeinteresService} from '../grupodeinteres.service';
import { Grupodeinteres } from '../grupodeinteres';
import { Noticia } from '../noticia';


@Component({
  selector: 'app-grupodeinteres-list',
  templateUrl: './grupodeinteres-list.component.html',
  styleUrls: ['./grupodeinteres-list.component.css']
})
export class GrupodeinteresListComponent implements OnInit {

  constructor(private grupodeinteresService: GrupodeinteresService) { }
  
  gruposdeinteres: Grupodeinteres[];
  
  
  getGrupos(): void {
      
      this.grupodeinteresService.getGrupos()
          .subscribe(grupos => this.gruposdeinteres = grupos)
  }

  ngOnInit() {
      
      this.getGrupos();
  }

}
