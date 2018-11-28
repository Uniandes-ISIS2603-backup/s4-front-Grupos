import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DistritoEditComponent} from './distrito-edit/distrito-edit.component';
import { DistritoService } from './distrito.service';
import { DistritoListComponent } from './distrito-list/distrito-list.component';
import { DistritoDetailComponent } from './distrito-detail/distrito-detail.component';
import { DistritoCreateComponent } from './distrito-create/distrito-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { DistritoDeleteComponent } from './distrito-delete/distrito-delete.component';
import { DistritoListLocacionComponent } from './distrito-list-locacion/distrito-list-locacion.component';
import { DistritoAddLocacionComponent } from './distrito-add-locacion/distrito-add-locacion.component';
import { DistritoDeleteLocacionComponent } from './distrito-delete-locacion/distrito-delete-locacion.component';
import { DistritoEditLocacionComponent } from './distrito-edit-locacion/distrito-edit-locacion.component';
import { DistritoLocacionDetailComponent } from './distrito-locacion-detail/distrito-locacion-detail.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
  ],
  declarations: [DistritoListComponent, DistritoDetailComponent,
     DistritoCreateComponent, DistritoEditComponent, DistritoDeleteComponent, 
     DistritoListLocacionComponent,
    DistritoAddLocacionComponent, DistritoDeleteLocacionComponent, 
    DistritoEditLocacionComponent, DistritoLocacionDetailComponent],
  exports: [DistritoListComponent, DistritoCreateComponent, 
    DistritoEditComponent, DistritoListLocacionComponent],
  providers:[DistritoService]
})
export class DistritoModule { }
