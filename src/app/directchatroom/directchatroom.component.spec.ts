import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectchatroomComponent } from './directchatroom.component';

describe('DirectchatroomComponent', () => {
  let component: DirectchatroomComponent;
  let fixture: ComponentFixture<DirectchatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectchatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectchatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
