import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsOverviewComponent } from './bars-overview.component';

describe('BarsOverviewComponent', () => {
  let component: BarsOverviewComponent;
  let fixture: ComponentFixture<BarsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
