import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommitteememberComponent } from './addcommitteemember.component';

describe('AddcommitteememberComponent', () => {
  let component: AddcommitteememberComponent;
  let fixture: ComponentFixture<AddcommitteememberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcommitteememberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommitteememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
