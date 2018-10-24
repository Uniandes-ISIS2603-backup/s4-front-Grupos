import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CiudadanoListComponent} from '../ciudadano/ciudadano-list/ciudadano-list.component';

const routes: Routes = [
    {
        path: 'ciudadanos',
        children: [
            {
                path: 'list',
                component: CiudadanoListComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}


