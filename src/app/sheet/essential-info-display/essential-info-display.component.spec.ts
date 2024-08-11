import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialInfoDisplayComponent } from './essential-info-display.component';

describe('EssentialInfoDisplayComponent', () => {
  let component: EssentialInfoDisplayComponent;
  let fixture: ComponentFixture<EssentialInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialInfoDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EssentialInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
