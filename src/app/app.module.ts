import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


import {CiudadanoModule} from './ciudadano/ciudadano.module';
import {GrupodeinteresModule} from './grupodeinteres/grupodeinteres.module';
import {CategoriaModule} from './categoria/categoria.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CiudadanoModule,
        FormsModule,
        GrupodeinteresModule,
        CategoriaModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}