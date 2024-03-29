import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


import {CiudadanoModule} from './ciudadano/ciudadano.module';
import {ComentarioModule} from './comentario/comentario.module';
import {GrupodeinteresModule} from './grupodeinteres/grupodeinteres.module';
import {CategoriaModule} from './categoria/categoria.module';
import {AdministradorModule} from './administrador/administrador.module';
import {DistritoModule} from './distrito/distrito.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PatrocinioModule} from './patrocinio/patrocinio.module';
import {LocacionModule} from './locacion/locacion.module';


import { RouterModule, Routes } from '@angular/router';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CiudadanoModule,
        ComentarioModule,
        FormsModule,
        GrupodeinteresModule,
        LocacionModule,
        CategoriaModule,
        PatrocinioModule,
        DistritoModule,
        AdministradorModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule, 
        RouterModule,
        NgbModule
    ],

    bootstrap: [AppComponent],
    providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    }
    ]
})
export class AppModule {}
