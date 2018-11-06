import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GrupodeinteresService} from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';
import { GrupodeinteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
    declarations: [GrupodeinteresListComponent, GrupodeinteresDetailComponent],
    providers: [GrupodeinteresService],
    exports: [GrupodeinteresListComponent, GrupodeinteresDetailComponent]
})
export class GrupodeinteresModule { }
