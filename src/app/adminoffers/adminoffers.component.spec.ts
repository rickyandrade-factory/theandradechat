import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsubscriptionsComponent } from './adminsubscriptions.component';

describe('AdminsubscriptionsComponent', () => {
  let component: AdminsubscriptionsComponent;
  let fixture: ComponentFixture<AdminsubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
