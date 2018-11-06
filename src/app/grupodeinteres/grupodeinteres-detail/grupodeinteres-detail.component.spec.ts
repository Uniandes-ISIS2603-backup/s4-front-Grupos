import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeinteresDetailComponent } from './grupodeinteres-detail.component';

describe('GrupodeinteresDetailComponent', () => {
  let component: GrupodeinteresDetailComponent;
  let fixture: ComponentFixture<GrupodeinteresDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupodeinteresDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeinteresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
