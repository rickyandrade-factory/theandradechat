import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminservicesComponent } from './adminservices.component';

describe('AdminservicesComponent', () => {
  let component: AdminservicesComponent;
  let fixture: ComponentFixture<AdminservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
