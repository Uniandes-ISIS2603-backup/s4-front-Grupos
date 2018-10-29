import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { ComentarioListComponent } from './comentario-list.component';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';

describe('ComentarioComponent', () => {
    let component: ComentarioListComponent;
    let fixture: ComponentFixture<ComentarioListComponent>;
    const comentarios: Comentario[] = require('../../../assets/comentarios.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AppRoutingModule, HttpClientModule, AppModule ],
            declarations: [ ],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ComentarioService ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ComentarioListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should have a list of comentarios', () => {
        component.comentarios = comentarios;
        expect(component.comentarios.length).toEqual(comentarios.length);
    });
    
});


