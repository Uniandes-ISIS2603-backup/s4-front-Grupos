import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { CategoriaDetail } from '../categoria-detail';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit, OnChanges {

  constructor(
    private categoriaService: CategoriaService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  categoria: CategoriaDetail;

  categoria_id: number;

  editCategoria(): void {
    this.categoriaService.updateCategoria(this.categoria)
      .subscribe(() => {
        this.toastrService.success("The categoria's information was updated", "Grupodeinteres edition");
        this.router.navigate(['/categorias/list']);
      });
  }

  getCategoriaDetail(): void {
    this.categoriaService.getCategoriaDetail(this.categoria_id)
      .subscribe(categoriaDetail => {
        console.log(categoriaDetail);
        this.categoria = categoriaDetail;
        console.log(this.categoria);
      });
  }

  cancelEdition(): void {
    this.router.navigate(['/categorias/list']);
  }

  ngOnInit() {

    this.categoria_id = +this.route.snapshot.paramMap.get('id');
    this.categoria = new CategoriaDetail();
    this.getCategoriaDetail();
  }

  ngOnChanges() {
    this.ngOnInit();


  }

}
