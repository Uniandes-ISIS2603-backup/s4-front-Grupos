import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresEditEventoComponent } from './grupodeinteres-edit-evento.component';

describe('GrupodeinteresEditEventoComponent', () => {
  let component: GrupodeinteresEditEventoComponent;
  let fixture: ComponentFixture<GrupodeinteresEditEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresEditEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresEditEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
