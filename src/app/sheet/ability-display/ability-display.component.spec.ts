import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityDisplayComponent } from './ability-display.component';

describe('AbilityDisplayComponent', () => {
  let component: AbilityDisplayComponent;
  let fixture: ComponentFixture<AbilityDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilityDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbilityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
