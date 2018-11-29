import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {AdministradorCreateComponent} from '../administrador/administrador-create/administrador-create.component';
import {CiudadanoListComponent} from '../ciudadano/ciudadano-list/ciudadano-list.component';
import {CiudadanoCreateComponent} from '../ciudadano/ciudadano-create/ciudadano-create.component';
import {CiudadanoEditComponent} from '../ciudadano/ciudadano-edit/ciudadano-edit.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {ComentarioDetailComponent} from '../comentario/comentario-detail/comentario-detail.component';
import {ComentarioCreateComponent} from '../comentario/comentario-create/comentario-create.component';
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
import {LocacionListComponent} from '../locacion/locacion-list/locacion-list.component';
import {LocacionDetailComponent} from '../locacion/locacion-detail/locacion-detail.component';
import  {LocacionCreateComponent} from '../locacion/locacion-create/locacion-create.component';
import {GrupodeinteresDetailComponent} from '../grupodeinteres/grupodeinteres-detail/grupodeinteres-detail.component';
import { GrupodeinteresNoticiaComponent } from '../grupodeinteres/grupodeinteres-noticias/grupodeinteres-noticia.component';
import { GrupodeinteresAddNoticiaComponent } from '../grupodeinteres/grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';
import {GrupodeinteresCreateComponent} from '../grupodeinteres/grupodeinteres-create/grupodeinteres-create.component';

import {CategoriaDetailComponent} from '../categoria/categoria-detail/categoria-detail.component';
import {CategoriaCreateComponent} from '../categoria/categoria-create/categoria-create.component';

import { GrupodeinteresEventoComponent } from '../grupodeinteres/grupodeinteres-eventos/grupodeinteres-evento.component';
import { GrupodeinteresAddEventoComponent } from '../grupodeinteres/grupodeinteres-add-evento/grupodeinteres-add-evento.component';
import { GrupodeinteresEditNoticiaComponent } from '../grupodeinteres/grupodeinteres-edit-noticia/grupodeinteres-edit-noticia.component';
import { GrupodeinteresNoticiaDetailComponent } from '../grupodeinteres/grupodeinteres-noticia-detail/grupodeinteres-noticia-detail.component';
import { DistritoDeleteComponent } from '../distrito/distrito-delete/distrito-delete.component';
import { GrupodeinteresDeleteNoticiaComponent } from '../grupodeinteres/grupodeinteres-delete-noticia/grupodeinteres-delete-noticia.component';
import { GrupodeinteresEditComponent } from '../grupodeinteres/grupodeinteres-edit/grupodeinteres-edit.component';
import { GrupodeinteresDeleteComponent } from '../grupodeinteres/grupodeinteres-delete/grupodeinteres-delete.component';
import { PatrocinioEditComponent } from '../patrocinio/patrocinio-edit/patrocinio-edit.component';
import { PatrocinioDeleteComponent } from '../patrocinio/patrocinio-delete/patrocinio-delete.component';
import { DistritoAddLocacionComponent } from '../distrito/distrito-add-locacion/distrito-add-locacion.component';
import { DistritoDeleteLocacionComponent } from '../distrito/distrito-delete-locacion/distrito-delete-locacion.component';
import { DistritoEditLocacionComponent } from '../distrito/distrito-edit-locacion/distrito-edit-locacion.component';
import { DistritoLocacionDetailComponent } from '../distrito/distrito-locacion-detail/distrito-locacion-detail.component';


const routes: Routes = [
    {
        path: 'ciudadanos',
        children: [
            {
                path: 'list',
                component: CiudadanoListComponent
            },
            {
                path: 'add',
                component: CiudadanoCreateComponent                
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
            },
            {
                path: 'add',
                component: ComentarioCreateComponent                
            },
            {
                path: ':id',
                component: ComentarioDetailComponent
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
                path: 'edit/:id',
                component: GrupodeinteresEditComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'delete/:id',
                component: GrupodeinteresDeleteComponent,
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
            },
            {
                path: ':id1/noticias/edit/:id2',
                             
                component: GrupodeinteresEditNoticiaComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id1/noticias/delete/:id2',
                             
                component: GrupodeinteresDeleteNoticiaComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id1/noticias/:id2',
                             
                component: GrupodeinteresNoticiaDetailComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id/eventos',
                             
                component: GrupodeinteresEventoComponent
            },
            {
                path: ':id/eventos/add',
                             
                component: GrupodeinteresAddEventoComponent,
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
                path: 'edit/:id',
                component: PatrocinioEditComponent  
            } ,
            {
                path: 'delete/:id',
                component: PatrocinioDeleteComponent  
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
                path: 'delete/:id',
                component: DistritoDeleteComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id/locaciones/add',
                             
                component: DistritoAddLocacionComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id1/locaciones/delete/:id2',
                             
                component: DistritoDeleteLocacionComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id1/locaciones/:id2',
                             
                component: DistritoLocacionDetailComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id1/locaciones/edit/:id2',
                             
                component: DistritoEditLocacionComponent,
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


