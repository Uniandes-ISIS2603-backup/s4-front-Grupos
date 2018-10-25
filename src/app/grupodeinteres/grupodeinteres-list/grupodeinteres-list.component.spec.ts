import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresListComponent } from './grupodeinteres-list.component';

describe('GrupodeinteresListComponent', () => {
  let component: GrupodeinteresListComponent;
  let fixture: ComponentFixture<GrupodeinteresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
