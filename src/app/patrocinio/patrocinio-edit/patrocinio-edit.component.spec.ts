import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinioEditComponent } from './patrocinio-edit.component';

describe('PatrocinioEditComponent', () => {
  let component: PatrocinioEditComponent;
  let fixture: ComponentFixture<PatrocinioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
