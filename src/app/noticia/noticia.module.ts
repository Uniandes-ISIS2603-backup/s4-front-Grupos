import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaListComponent } from './noticia-list/noticia-list.component';

import { NoticiaService } from './noticia.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoticiaListComponent], 
  providers: [NoticiaService],
  exports:[NoticiaListComponent],
})
export class NoticiaModule { }
