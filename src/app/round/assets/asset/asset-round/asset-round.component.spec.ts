import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRoundComponent } from './asset-round.component';

describe('AssetRoundComponent', () => {
  let component: AssetRoundComponent;
  let fixture: ComponentFixture<AssetRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
