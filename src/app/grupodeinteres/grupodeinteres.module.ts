import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupodeinteresService } from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GrupodeinteresNoticiaComponent } from './grupodeinteres-noticias/grupodeinteres-noticia.component';
import { GrupodeinteresEventoComponent } from './grupodeinteres-eventos/grupodeinteres-evento.component';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { GrupodeinteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GrupodeinteresAddNoticiaComponent } from './grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';
import { GrupodeinteresAddEventoComponent } from './grupodeinteres-add-evento/grupodeinteres-add-evento.component';
import { GrupodeinteresCreateComponent } from './grupodeinteres-create/grupodeinteres-create.component';
import { GrupodeinteresEditNoticiaComponent } from './grupodeinteres-edit-noticia/grupodeinteres-edit-noticia.component';
import { GrupodeinteresNoticiaDetailComponent } from './grupodeinteres-noticia-detail/grupodeinteres-noticia-detail.component';
import { GrupodeinteresDeleteNoticiaComponent } from './grupodeinteres-delete-noticia/grupodeinteres-delete-noticia.component';
import { GrupodeinteresEditComponent } from './grupodeinteres-edit/grupodeinteres-edit.component';
import { GrupodeinteresDeleteComponent } from './grupodeinteres-delete/grupodeinteres-delete.component';
import { GrupodeinteresEditEventoComponent } from './grupodeinteres-edit-evento/grupodeinteres-edit-evento.component';
import { GrupodeinteresEventoDetailComponent } from './grupodeinteres-evento-detail/grupodeinteres-evento-detail.component';
import { GrupodeinteresDeleteEventoComponent } from './grupodeinteres-delete-evento/grupodeinteres-delete-evento.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
    declarations: [GrupodeinteresListComponent, GrupodeinteresCreateComponent, 
      GrupodeinteresDetailComponent, 
      GrupodeinteresNoticiaComponent, GrupodeinteresAddNoticiaComponent, 
      GrupodeinteresEventoComponent, GrupodeinteresAddEventoComponent, 
      GrupodeinteresEditNoticiaComponent, GrupodeinteresNoticiaDetailComponent,
      GrupodeinteresDeleteNoticiaComponent, GrupodeinteresEditComponent, GrupodeinteresDeleteComponent,
      GrupodeinteresEditEventoComponent, GrupodeinteresEventoDetailComponent,GrupodeinteresDeleteEventoComponent],
    providers: [GrupodeinteresService],
    exports: [GrupodeinteresListComponent, GrupodeinteresDetailComponent,
       GrupodeinteresCreateComponent,GrupodeinteresNoticiaDetailComponent,GrupodeinteresDeleteNoticiaComponent,
       GrupodeinteresEventoDetailComponent,GrupodeinteresDeleteEventoComponent]
})
export class GrupodeinteresModule { }
