import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoLocacionDetailComponent } from './distrito-locacion-detail.component';

describe('LocacionEditComponent', () => {
  let component: DistritoLocacionDetailComponent;
  let fixture: ComponentFixture<DistritoLocacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoLocacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoLocacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
