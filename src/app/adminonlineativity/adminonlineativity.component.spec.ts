import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminonlineativityComponent } from './adminonlineativity.component';

describe('AdminonlineativityComponent', () => {
  let component: AdminonlineativityComponent;
  let fixture: ComponentFixture<AdminonlineativityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminonlineativityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminonlineativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
