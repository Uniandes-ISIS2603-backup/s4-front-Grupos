import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioService } from './comentario.service';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [ComentarioListComponent],
    providers: [ComentarioService],
    exports: [ComentarioListComponent]
})
export class ComentarioModule {}


