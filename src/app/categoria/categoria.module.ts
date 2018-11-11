import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CategoriaService} from './categoria.service';

import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [CategoriaListComponent, CategoriaDetailComponent, CategoriaCreateComponent],
    providers: [CategoriaService],
    exports: [CategoriaListComponent, CategoriaDetailComponent, CategoriaCreateComponent]
})
export class CategoriaModule { }
