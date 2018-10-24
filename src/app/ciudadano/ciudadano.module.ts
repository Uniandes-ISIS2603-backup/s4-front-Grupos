import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadanoService } from './ciudadano.service';
import { CiudadanoListComponent } from './ciudadano-list/ciudadano-list.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [CiudadanoListComponent],
    providers: [CiudadanoService],
    exports: [CiudadanoListComponent]
})
export class CiudadanoModule {}


