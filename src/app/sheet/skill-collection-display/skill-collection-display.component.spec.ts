import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCollectionDisplayComponent } from './skill-collection-display.component';

describe('SkillCollectionDisplayComponent', () => {
  let component: SkillCollectionDisplayComponent;
  let fixture: ComponentFixture<SkillCollectionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCollectionDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillCollectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
