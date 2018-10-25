import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { PatrocinioListComponent } from './patrocinio-list.component';
import { Patrocinio } from '../patrocinio';
import { PatrocinioService } from '../patrocinio.service';

describe('PatrocinioComponent', () => {
    let component: PatrocinioListComponent;
    let fixture: ComponentFixture<PatrocinioListComponent>;
    const patrocinios: Patrocinio[] = require('../../../assets/patrocinios.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AppRoutingModule, HttpClientModule, AppModule ],
            declarations: [ ],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, PatrocinioService ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PatrocinioListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should have a list of patrocinios', () => {
        component.patrocinios = patrocinios;
        expect(component.patrocinios.length).toEqual(patrocinios.length);
    });
    
});


