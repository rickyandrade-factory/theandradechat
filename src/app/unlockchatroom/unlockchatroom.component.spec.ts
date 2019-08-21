import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockchatroomComponent } from './unlockchatroom.component';

describe('UnlockchatroomComponent', () => {
  let component: UnlockchatroomComponent;
  let fixture: ComponentFixture<UnlockchatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockchatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockchatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
