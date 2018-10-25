import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrocinioService } from './patrocinio.service';
import { PatrocinioListComponent } from './patrocinio-list/patrocinio-list.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [PatrocinioListComponent],
    providers: [PatrocinioService],
    exports: [PatrocinioListComponent]
})
export class PatrocinioModule {}


