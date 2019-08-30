import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpointRoomComponent } from './onpoint-room.component';

describe('OnpointRoomComponent', () => {
  let component: OnpointRoomComponent;
  let fixture: ComponentFixture<OnpointRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpointRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpointRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
