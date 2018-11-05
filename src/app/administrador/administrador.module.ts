import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdministradorListComponent} from './administrador-list/administrador-list.component';
import {AdministradorService} from './administrador.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AdministradorListComponent],
    providers: [AdministradorService],
    exports: [AdministradorListComponent]
})
export class AdministradorModule {}
