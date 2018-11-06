import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {CiudadanoListComponent} from '../ciudadano/ciudadano-list/ciudadano-list.component';
import { CiudadanoDetailComponent } from '../ciudadano/ciudadano-detail/ciudadano-detail.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {GrupodeinteresListComponent} from '../grupodeinteres/grupodeinteres-list/grupodeinteres-list.component';
import {CategoriaListComponent} from '../categoria/categoria-list/categoria-list.component';
import {NoticiaListComponent} from '../noticia/noticia-list/noticia-list.component';
import {EventoListComponent} from '../evento/evento-list/evento-list.component';
import {DistritoListComponent} from '../distrito/distrito-list/distrito-list.component';


import {PatrocinioListComponent} from '../patrocinio/patrocinio-list/patrocinio-list.component';

const routes: Routes = [
    {
        path: 'ciudadanos',
        children: [
            {
                path: 'list',
                component: CiudadanoListComponent
            },
            {
                path: ':id',
                component: CiudadanoDetailComponent
            }
        ]
    },    {
        path: 'comentarios',
        children: [
            {
                path: 'list',
                component: ComentarioListComponent
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
    },
     {
        path: 'patrocinios',
        children: [
            {
                path: 'list',
                component: PatrocinioListComponent
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
    },
      {
        path: 'administradores',
        children: [
            {
                path: 'list',
                component: AdministradorListComponent
            }
        ]
    }
    ,
      {
        path: 'eventos',
        children: [
            {
                path: 'list',
                component: EventoListComponent
            }
        ]
      },
    {
         path: 'home',
         component: CiudadanoListComponent
    },
    {
        path: 'distritos',
        children:[
           { path:'list',
        component: DistritoListComponent
           }
        ]
   },
    {
         path: '**',    
         redirectTo: 'home',    
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


