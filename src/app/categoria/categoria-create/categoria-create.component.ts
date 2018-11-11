import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {CategoriaService} from '../categoria.service';
import {Categoria} from '../categoria';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

    constructor(
        private categoriaService: CategoriaService,
        private toastrService: ToastrService,
        private router: Router) { }
        
        
    /**
    * The new categoria
    */
    categoria: Categoria;   
    
    
    /**
    * Cancels the creation of the new grupo
    * Redirects to the grupos list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The categoria wasn\'t created', 'Categoria creation');
        this.router.navigate(['/categorias/list']);
    }
    
    
     /**
    * Creates a new grupo
    */
    createCategoria(): Categoria {
       
        this.categoriaService.createCategoria(this.categoria).subscribe(categoria => {   this.categoria.id = categoria.id;  
            this.router.navigate(['/categorias/' + categoria.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.categoria;
    }
        
       
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log(123);
        this.categoria = new Categoria();
        
    }
}
