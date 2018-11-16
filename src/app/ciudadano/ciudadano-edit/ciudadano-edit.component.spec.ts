import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanoCreateComponent } from './ciudadano-create.component';

describe('CiudadanoCreateComponent', () => {
  let component: CiudadanoCreateComponent;
  let fixture: ComponentFixture<CiudadanoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadanoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadanoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
