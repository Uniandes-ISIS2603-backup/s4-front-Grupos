import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GrupodeinteresService} from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';
import { GrupodeinteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { GrupodeinteresCreateComponent } from './grupodeinteres-create/grupodeinteres-create.component';

import {FormsModule} from '@angular/forms';




@NgModule({
  imports: [
      CommonModule, AppRoutingModule, FormsModule
  ],
    declarations: [GrupodeinteresListComponent, GrupodeinteresDetailComponent, GrupodeinteresCreateComponent],
    providers: [GrupodeinteresService],
    exports: [GrupodeinteresListComponent, GrupodeinteresDetailComponent, GrupodeinteresCreateComponent]
})
export class GrupodeinteresModule { }
