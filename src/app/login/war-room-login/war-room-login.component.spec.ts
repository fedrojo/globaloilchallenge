import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarRoomLoginComponent } from './war-room-login.component';

describe('WarRoomLoginComponent', () => {
  let component: WarRoomLoginComponent;
  let fixture: ComponentFixture<WarRoomLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarRoomLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarRoomLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
