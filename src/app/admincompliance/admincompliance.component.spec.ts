import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincomplianceComponent } from './admincompliance.component';

describe('AdmincomplianceComponent', () => {
  let component: AdmincomplianceComponent;
  let fixture: ComponentFixture<AdmincomplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincomplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincomplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
