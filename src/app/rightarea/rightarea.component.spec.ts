import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightareaComponent } from './rightarea.component';

describe('RightareaComponent', () => {
  let component: RightareaComponent;
  let fixture: ComponentFixture<RightareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
