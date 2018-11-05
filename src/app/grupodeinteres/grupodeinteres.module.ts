import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GrupodeinteresService} from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';
import { GrupodeinteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
    declarations: [GrupodeinteresListComponent, GrupodeinteresDetailComponent],
    providers: [GrupodeinteresService],
    exports: [GrupodeinteresListComponent, GrupodeinteresDetailComponent]
})
export class GrupodeinteresModule { }
