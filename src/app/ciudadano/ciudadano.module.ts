import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { CiudadanoService } from './ciudadano.service';
import { CiudadanoListComponent } from './ciudadano-list/ciudadano-list.component';
import { CiudadanoDetailComponent } from './ciudadano-detail/ciudadano-detail.component';
import { CiudadanoDeleteComponent } from './ciudadano-delete/ciudadano-delete.component';
import { CiudadanoCreateComponent } from './ciudadano-create/ciudadano-create.component';
import { CiudadanoEditComponent } from './ciudadano-edit/ciudadano-edit.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
//import { GrupoDeInteresModule } from '../grupodeinteres/grupodeinteres.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule

//        GrupoDeInteresModule
    ],
    declarations: [CiudadanoListComponent, CiudadanoDetailComponent, CiudadanoCreateComponent, CiudadanoEditComponent, CiudadanoDeleteComponent],
    providers: [CiudadanoService],
    exports: [CiudadanoListComponent, CiudadanoCreateComponent]
})
export class CiudadanoModule {}


