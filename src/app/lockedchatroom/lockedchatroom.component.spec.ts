import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedchatroomComponent } from './lockedchatroom.component';

describe('LockedchatroomComponent', () => {
  let component: LockedchatroomComponent;
  let fixture: ComponentFixture<LockedchatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedchatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedchatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
