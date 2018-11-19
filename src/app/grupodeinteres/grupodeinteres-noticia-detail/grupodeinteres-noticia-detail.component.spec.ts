import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresNoticiaDetailComponent } from './grupodeinteres-noticia-detail.component';

describe('NoticiaEditComponent', () => {
  let component: GrupodeinteresNoticiaDetailComponent;
  let fixture: ComponentFixture<GrupodeinteresNoticiaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresNoticiaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresNoticiaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
