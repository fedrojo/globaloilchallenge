import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScoresComponent } from './table-scores.component';

describe('TableScoresComponent', () => {
  let component: TableScoresComponent;
  let fixture: ComponentFixture<TableScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
