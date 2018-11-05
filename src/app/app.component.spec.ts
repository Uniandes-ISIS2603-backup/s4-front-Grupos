import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CiudadanoListComponent} from './ciudadano/ciudadano-list/ciudadano-list.component';
import {AdministradorListComponent} from './administrador/administrador-list/administrador-list.component';
import {ComentarioListComponent} from './comentario/comentario-list/comentario-list.component';
import {PatrocinioListComponent} from './patrocinio/patrocinio-list/ciudadano-list.component';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule],
            declarations: [AppComponent, CiudadanoListComponent, ComentarioListComponent, PatrocinioListComponent, AdministradorListComponent, EventoListComponent],

            providers: [{provide: APP_BASE_HREF, useValue: ''}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it(`should have as title 'Bookstore'`, async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual(component.title);
    }));

    it('should render titles in the navbar', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#ciudadanosTag').textContent).toContain('Ciudadanos');
        expect(compiled.querySelector('#patrociniosTag').textContent).toContain('Patrocinios');
        expect(compiled.querySelector('#administradoresTag').textContent).toContain('Administradores');
        expect(compiled.querySelector('#eventosTag').textContent).toContain('Eventos');
    }));
    
        it('should render titles in the navbar', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#comentariosTag').textContent).toContain('Comentarios');
    }));
});
