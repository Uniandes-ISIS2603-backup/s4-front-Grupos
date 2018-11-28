import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoEditLocacionComponent } from './distrito-edit-locacion.component';

describe('DistritoEditLocacionComponent', () => {
  let component: DistritoEditLocacionComponent;
  let fixture: ComponentFixture<DistritoEditLocacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoEditLocacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoEditLocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
