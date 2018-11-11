import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { ComentarioService } from './comentario.service';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ComentarioListComponent, ComentarioCreateComponent],
    providers: [ComentarioService],
    exports: [ComentarioListComponent, ComentarioCreateComponent]
})
export class ComentarioModule {}


