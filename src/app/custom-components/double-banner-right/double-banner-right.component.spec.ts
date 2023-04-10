import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBannerRightComponent } from './double-banner-right.component';

describe('DoubleBannerRightComponent', () => {
  let component: DoubleBannerRightComponent;
  let fixture: ComponentFixture<DoubleBannerRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBannerRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleBannerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
