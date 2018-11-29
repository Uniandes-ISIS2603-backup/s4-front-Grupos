import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresEventoDetailComponent } from './grupodeinteres-evento-detail.component';

describe('EventoEditComponent', () => {
  let component: GrupodeinteresEventoDetailComponent;
  let fixture: ComponentFixture<GrupodeinteresEventoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresEventoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresEventoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
