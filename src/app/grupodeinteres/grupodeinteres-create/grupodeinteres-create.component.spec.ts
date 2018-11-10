import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresCreateComponent } from './grupodeinteres-create.component';

describe('GrupodeinteresCreateComponent', () => {
  let component: GrupodeinteresCreateComponent;
  let fixture: ComponentFixture<GrupodeinteresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
