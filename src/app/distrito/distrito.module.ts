import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistritoListComponent } from './distrito-list/distrito-list.component';
import { DistritoService } from './distrito.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DistritoListComponent],
  exports: [DistritoListComponent],
  providers:[DistritoService]
})
export class DistritoModule { }
