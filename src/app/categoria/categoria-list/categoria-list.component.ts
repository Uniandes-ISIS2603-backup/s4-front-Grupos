import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../categoria.service';
import {Categoria} from '../categoria';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

    constructor( private categoriaService: CategoriaService) { }
    
    categorias : Categoria[];
    
    getCategorias():void{
        
        this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias)
    }

  ngOnInit() {
      
      this.getCategorias();
  }

}
