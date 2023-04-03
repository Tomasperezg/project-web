import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBannerLeftComponent } from './double-banner-left.component';

describe('DoubleBannerLeftComponent', () => {
  let component: DoubleBannerLeftComponent;
  let fixture: ComponentFixture<DoubleBannerLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBannerLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleBannerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
