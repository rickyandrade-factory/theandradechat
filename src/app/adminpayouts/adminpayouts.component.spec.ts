import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpayoutsComponent } from './adminpayouts.component';

describe('AdminpayoutsComponent', () => {
  let component: AdminpayoutsComponent;
  let fixture: ComponentFixture<AdminpayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
