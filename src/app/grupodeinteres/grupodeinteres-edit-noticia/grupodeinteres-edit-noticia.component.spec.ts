import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresEditNoticiaComponent } from './grupodeinteres-edit-noticia.component';

describe('GrupodeinteresEditNoticiaComponent', () => {
  let component: GrupodeinteresEditNoticiaComponent;
  let fixture: ComponentFixture<GrupodeinteresEditNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresEditNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresEditNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
