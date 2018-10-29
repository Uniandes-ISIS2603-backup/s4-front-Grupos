import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import {AdministradorListComponent} from './administrador-list.component';
import {Administrador} from '../administrador';
import {AdministradorService} from '../administrador.service';

describe('AdministradorComponent', () => {
    let component: AdministradorListComponent;
    let fixture: ComponentFixture<AdministradorListComponent>;
    const administradores: Administrador[] = require('../../../assets/administradores.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, AdministradorService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdministradorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of administradores', () => {
        component.administradores = administradores;
        expect(component.administradores.length).toEqual(administradores.length);
    });

});