import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchatroomComponent } from './adminchatroom.component';

describe('AdminchatroomComponent', () => {
  let component: AdminchatroomComponent;
  let fixture: ComponentFixture<AdminchatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
