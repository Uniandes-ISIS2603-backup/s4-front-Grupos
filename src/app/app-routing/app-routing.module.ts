import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {AdministradorCreateComponent} from '../administrador/administrador-create/administrador-create.component';
import {CiudadanoListComponent} from '../ciudadano/ciudadano-list/ciudadano-list.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {GrupodeinteresListComponent} from '../grupodeinteres/grupodeinteres-list/grupodeinteres-list.component';
import {CategoriaListComponent} from '../categoria/categoria-list/categoria-list.component';

import {DistritoListComponent} from '../distrito/distrito-list/distrito-list.component';
import {DistritoDetailComponent} from '../distrito/distrito-detail/distrito-detail.component';
import {DistritoCreateComponent} from '../distrito/distrito-create/distrito-create.component';
import {CiudadanoDetailComponent} from '../ciudadano/ciudadano-detail/ciudadano-detail.component';
import {AdministradorDetailComponent} from '../administrador/administrador-detail/administrador-detail.component';
import {PatrocinioListComponent} from '../patrocinio/patrocinio-list/patrocinio-list.component';
import {PatrocinioDetailComponent} from '../patrocinio/patrocinio-detail/patrocinio-detail.component';
import  {PatrocinioCreateComponent} from '../patrocinio/patrocinio-create/patrocinio-create.component';
import {GrupodeinteresDetailComponent} from '../grupodeinteres/grupodeinteres-detail/grupodeinteres-detail.component';
import { GrupodeinteresNoticiaComponent } from '../grupodeinteres/grupodeinteres-noticias/grupodeinteres-noticia.component';
import { GrupodeinteresAddNoticiaComponent } from '../grupodeinteres/grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';
import {GrupodeinteresCreateComponent} from '../grupodeinteres/grupodeinteres-create/grupodeinteres-create.component';
import {CategoriaDetailComponent} from '../categoria/categoria-detail/categoria-detail.component';
import {CategoriaCreateComponent} from '../categoria/categoria-create/categoria-create.component';

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
    }, {
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
            }, 
            {
                path: 'add',
                component: GrupodeinteresCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                             
                component: GrupodeinteresDetailComponent
            },
            {
                path: ':id/noticias',
                             
                component: GrupodeinteresNoticiaComponent
            },
            {
                path: ':id/noticias/add',
                             
                component: GrupodeinteresAddNoticiaComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'categorias',
        children: [
            {
                path: 'list',
                component: CategoriaListComponent
            }, 
            {
                path: 'add',
                component: CategoriaCreateComponent,
                runGuardsAndResolvers: 'always'
            },
              {
                path: ':id',
                component: CategoriaDetailComponent
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
             ,
            {
                path: 'add',
                component: PatrocinioCreateComponent  
            } ,
              {
                path: ':id',
                component: PatrocinioDetailComponent
            }      
        ]
    }
    ,
   
    {
        path: 'administradores',
        children: [
            {
                path: 'list',
                component: AdministradorListComponent
            },
            {
                path: 'add',
                component: AdministradorCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: AdministradorDetailComponent
            }
        ]
    }
    ,

    {
        path: 'distritos',
        children: [
            {
                path: 'list',
                component: DistritoListComponent
            }
            ,
            {
                path: 'add',
                component: DistritoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: DistritoDetailComponent
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


