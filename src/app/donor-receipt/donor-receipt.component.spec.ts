import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorReceiptComponent } from './donor-receipt.component';

describe('DonorReceiptComponent', () => {
  let component: DonorReceiptComponent;
  let fixture: ComponentFixture<DonorReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
