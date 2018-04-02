import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsDetailsComponent } from './bars-details.component';

describe('BarsDetailsComponent', () => {
  let component: BarsDetailsComponent;
  let fixture: ComponentFixture<BarsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
