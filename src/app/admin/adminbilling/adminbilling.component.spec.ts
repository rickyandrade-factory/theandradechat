import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbillingComponent } from './adminbilling.component';

describe('AdminbillingComponent', () => {
  let component: AdminbillingComponent;
  let fixture: ComponentFixture<AdminbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
