import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresAddNoticiaComponent } from './grupodeinteres-add-noticia.component';

describe('GrupodeinteresAddNoticiaComponent', () => {
  let component: GrupodeinteresAddNoticiaComponent;
  let fixture: ComponentFixture<GrupodeinteresAddNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresAddNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresAddNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
