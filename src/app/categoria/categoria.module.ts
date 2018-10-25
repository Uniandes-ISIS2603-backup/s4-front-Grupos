import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriaService} from './categoria.service';

import { CategoriaListComponent } from './categoria-list/categoria-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoriaListComponent],
    providers: [CategoriaService],
    exports: [CategoriaListComponent]
})
export class CategoriaModule { }
