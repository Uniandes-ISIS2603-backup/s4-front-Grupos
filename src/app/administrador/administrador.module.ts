import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AdministradorEditComponent} from './administrador-edit/administrador-edit.component';
import { AdministradorService } from './administrador.service';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { AdministradorDetailComponent } from './administrador-detail/administrador-detail.component';
import { AdministradorCreateComponent } from './administrador-create/administrador-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { AdministradorDeleteComponent } from './administrador-delete/administrador-delete.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
  ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent,
     AdministradorCreateComponent, AdministradorEditComponent, AdministradorDeleteComponent],
  exports: [AdministradorListComponent, AdministradorCreateComponent, 
    AdministradorEditComponent],
  providers:[AdministradorService]
})
export class AdministradorModule { }
