import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { LocacionService } from './locacion.service';
import { LocacionListComponent } from './locacion-list/locacion-list.component';
import { LocacionDetailComponent } from './locacion-detail/locacion-detail.component';
import { LocacionCreateComponent } from './locacion-create/locacion-create.component';
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
    declarations: [LocacionListComponent, LocacionDetailComponent  ,LocacionCreateComponent],
    providers: [LocacionService],
    exports: [LocacionListComponent, LocacionDetailComponent, LocacionCreateComponent]
})
export class LocacionModule {}


