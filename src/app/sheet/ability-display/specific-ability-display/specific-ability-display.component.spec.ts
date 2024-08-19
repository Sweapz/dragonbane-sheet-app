import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificAbilityDisplayComponent } from './specific-ability-display.component';

describe('SpecificAbilityDisplayComponent', () => {
  let component: SpecificAbilityDisplayComponent;
  let fixture: ComponentFixture<SpecificAbilityDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificAbilityDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecificAbilityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
