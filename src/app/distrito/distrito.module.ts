import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistritoListComponent } from './distrito-list/distrito-list.component';

import { DistritoDetailComponent } from './distrito-detail/distrito-detail.component';
import { DistritoService } from './distrito.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DistritoListComponent, DistritoDetailComponent],
  exports: [DistritoListComponent,DistritoDetailComponent],
  providers:[DistritoService]
})
export class DistritoModule { }
