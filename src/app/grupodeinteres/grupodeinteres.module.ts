import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupodeinteresService } from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GrupodeinteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';
import { GrupodeinteresNoticiaComponent } from './grupodeinteres-noticias/grupodeinteres-noticia.component';
import { GrupodeinteresEventoComponent } from './grupodeinteres-eventos/grupodeinteres-evento.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrupodeinteresAddNoticiaComponent } from './grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';
import { GrupodeinteresAddEventoComponent } from './grupodeinteres-add-evento/grupodeinteres-add-evento.component';
import { GrupodeinteresCreateComponent } from './grupodeinteres-create/grupodeinteres-create.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
    declarations: [GrupodeinteresListComponent, GrupodeinteresCreateComponent, GrupodeinteresDetailComponent, 
      GrupodeinteresNoticiaComponent, GrupodeinteresAddNoticiaComponent, GrupodeinteresEventoComponent, GrupodeinteresAddEventoComponent],
    providers: [GrupodeinteresService],
    exports: [GrupodeinteresListComponent, GrupodeinteresDetailComponent, GrupodeinteresCreateComponent]
})
export class GrupodeinteresModule { }
