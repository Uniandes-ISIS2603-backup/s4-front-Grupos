import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresAddEventoComponent } from './grupodeinteres-add-evento.component';

describe('GrupodeinteresAddEventoComponent', () => {
  let component: GrupodeinteresAddEventoComponent;
  let fixture: ComponentFixture<GrupodeinteresAddEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresAddEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresAddEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
