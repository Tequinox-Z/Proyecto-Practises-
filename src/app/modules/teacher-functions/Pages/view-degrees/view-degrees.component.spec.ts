import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDegreesComponent } from './view-degrees.component';

describe('ViewDegreesComponent', () => {
  let component: ViewDegreesComponent;
  let fixture: ComponentFixture<ViewDegreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDegreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
