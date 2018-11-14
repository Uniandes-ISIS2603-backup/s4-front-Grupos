import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {GrupodeinteresAddNoticiaComponent} from './grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';
import { GrupodeinteresNoticiaComponent } from './grupodeinteres-noticias/grupodeinteres-noticia.component';
import { GrupodeinteresService } from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';
import { GrupodeinteresCreateComponent } from './grupodeinteres-create/grupodeinteres-create.component';

import { GrupodeinteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
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
      GrupodeinteresNoticiaComponent, GrupodeinteresAddNoticiaComponent],
    providers: [GrupodeinteresService],
    exports: [GrupodeinteresListComponent, GrupodeinteresDetailComponent, GrupodeinteresCreateComponent]
})
export class GrupodeinteresModule { }
