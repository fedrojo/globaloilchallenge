import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarRoomRoundComponent } from './war-room-round.component';

describe('WarRoomRoundComponent', () => {
  let component: WarRoomRoundComponent;
  let fixture: ComponentFixture<WarRoomRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarRoomRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarRoomRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
