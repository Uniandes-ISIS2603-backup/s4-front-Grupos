import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresEditComponent } from './grupodeinteres-edit.component';

describe('GrupodeinteresEditComponent', () => {
  let component: GrupodeinteresEditComponent;
  let fixture: ComponentFixture<GrupodeinteresEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
