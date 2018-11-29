import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

   constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    
    private toastrService: ToastrService,
    private router: Router
) { }


categoria_id: number;


deleteCategoria(): void {
    this.categoriaService.deleteCategoria(this.categoria_id)
        .subscribe(categoriaDetail=>{this.router.navigate(['/categorias/list']);
        this.toastrService.success("La categoria fue eliminada correctamente", "Categoria borrado")});
}

ngOnInit() {
    this.categoria_id = +this.route.snapshot.paramMap.get('id');
    if (this.categoria_id) {
        this.deleteCategoria();
    }
}
}
