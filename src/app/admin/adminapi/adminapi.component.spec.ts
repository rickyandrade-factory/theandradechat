import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapiComponent } from './adminapi.component';

describe('AdminapiComponent', () => {
  let component: AdminapiComponent;
  let fixture: ComponentFixture<AdminapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
