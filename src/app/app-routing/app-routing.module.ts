import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CiudadanoListComponent} from '../ciudadano/ciudadano-list/ciudadano-list.component';
import {GrupodeinteresListComponent} from '../grupodeinteres/grupodeinteres-list/grupodeinteres-list.component';
import {CategoriaListComponent} from '../categoria/categoria-list/categoria-list.component';
import {NoticiaListComponent} from '../noticia/noticia-list/noticia-list.component';



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
    {
        path: 'gruposdeinteres',
        children: [
            {
                path: 'list',
                component: GrupodeinteresListComponent
            }
        ]
    },
      {
        path: 'categorias',
        children: [
            {
                path: 'list',
                component: CategoriaListComponent
            }
        ]
    }
    ,
      {
        path: 'noticias',
        children: [
            {
                path: 'list',
                component: NoticiaListComponent
            }
        ]
    }
    
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


