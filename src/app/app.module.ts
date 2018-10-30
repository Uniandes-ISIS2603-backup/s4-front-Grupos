import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


import {NoticiaModule} from './noticia/noticia.module';
import {CiudadanoModule} from './ciudadano/ciudadano.module';
import {ComentarioModule} from './comentario/comentario.module';
import {GrupodeinteresModule} from './grupodeinteres/grupodeinteres.module';
import {CategoriaModule} from './categoria/categoria.module';
import {AdministradorModule} from './administrador/administrador.module';
import {DistritoModule} from './distrito/distrito.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PatrocinioModule} from './patrocinio/patrocinio.module';




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
        CategoriaModule,
        PatrocinioModule,
        NoticiaModule,
        DistritoModule,
        AdministradorModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
