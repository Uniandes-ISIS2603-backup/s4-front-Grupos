import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoAddLocacionComponent } from './distrito-add-locacion.component';

describe('DistritoAddLocacionComponent', () => {
  let component: DistritoAddLocacionComponent;
  let fixture: ComponentFixture<DistritoAddLocacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoAddLocacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoAddLocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
