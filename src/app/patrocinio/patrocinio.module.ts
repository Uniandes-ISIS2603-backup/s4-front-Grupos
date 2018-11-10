import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { PatrocinioService } from './patrocinio.service';
import { PatrocinioListComponent } from './patrocinio-list/patrocinio-list.component';
import { PatrocinioDetailComponent } from './patrocinio-detail/patrocinio-detail.component';
import { PatrocinioCreateComponent } from './patrocinio-create/patrocinio-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
         CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [PatrocinioListComponent, PatrocinioDetailComponent  ,PatrocinioCreateComponent],
    providers: [PatrocinioService],
    exports: [PatrocinioListComponent, PatrocinioDetailComponent, PatrocinioCreateComponent]
})
export class PatrocinioModule {}


