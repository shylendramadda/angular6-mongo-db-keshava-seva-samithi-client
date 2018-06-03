import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatsalyasindhuComponent } from './vatsalyasindhu.component';

describe('VatsalyasindhuComponent', () => {
  let component: VatsalyasindhuComponent;
  let fixture: ComponentFixture<VatsalyasindhuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatsalyasindhuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatsalyasindhuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
