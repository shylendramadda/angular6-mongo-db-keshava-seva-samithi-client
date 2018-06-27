import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteememberlistComponent } from './committeememberlist.component';

describe('CommitteememberlistComponent', () => {
  let component: CommitteememberlistComponent;
  let fixture: ComponentFixture<CommitteememberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteememberlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteememberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
