import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { CiudadanoService } from './ciudadano.service';
import { CiudadanoListComponent } from './ciudadano-list/ciudadano-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [CiudadanoListComponent],
    providers: [CiudadanoService],
    exports: [CiudadanoListComponent]
})
export class CiudadanoModule {}


