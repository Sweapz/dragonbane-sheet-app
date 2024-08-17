import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpWpDisplayComponent } from './hp-wp-display.component';

describe('HpWpDisplayComponent', () => {
  let component: HpWpDisplayComponent;
  let fixture: ComponentFixture<HpWpDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpWpDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HpWpDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
