import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerorderComponent } from './farmerorder.component';

describe('FarmerorderComponent', () => {
  let component: FarmerorderComponent;
  let fixture: ComponentFixture<FarmerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
