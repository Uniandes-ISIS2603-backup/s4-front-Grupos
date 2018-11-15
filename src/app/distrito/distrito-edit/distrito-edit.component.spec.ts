import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoEditComponent } from './distrito-edit.component';

describe('DistritoEditComponent', () => {
  let component: DistritoEditComponent;
  let fixture: ComponentFixture<DistritoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
