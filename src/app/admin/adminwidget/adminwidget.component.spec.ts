import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwidgetComponent } from './adminwidget.component';

describe('AdminwidgetComponent', () => {
  let component: AdminwidgetComponent;
  let fixture: ComponentFixture<AdminwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
