import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { CiudadanoListComponent } from './ciudadano-list.component';
import { Ciudadano } from '../ciudadano';
import { CiudadanoService } from '../ciudadano.service';

describe('CiudadanoComponent', () => {
    let component: CiudadanoListComponent;
    let fixture: ComponentFixture<CiudadanoListComponent>;
    const ciudadanos: Ciudadano[] = require('../../../assets/ciudadanos.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AppRoutingModule, HttpClientModule, AppModule ],
            declarations: [ ],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, CiudadanoService ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CiudadanoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should have a list of ciudadanos', () => {
        component.ciudadanos = ciudadanos;
        expect(component.ciudadanos.length).toEqual(ciudadanos.length);
    });
    
});


