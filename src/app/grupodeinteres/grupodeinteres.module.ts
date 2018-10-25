import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GrupodeinteresService} from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
    declarations: [GrupodeinteresListComponent],
    providers: [GrupodeinteresService],
    exports:[GrupodeinteresListComponent]
})
export class GrupodeinteresModule { }
