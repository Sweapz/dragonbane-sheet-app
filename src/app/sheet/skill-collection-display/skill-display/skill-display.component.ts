import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Skill } from '../../../../models/character/skill';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { OverlayPanelModule, OverlayPanel } from 'primeng/overlaypanel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-display',
  standalone: true,
  imports: [
    DividerModule,
    CheckboxModule,
    FormsModule,
    OverlayPanelModule,
    CommonModule,
  ],
  templateUrl: './skill-display.component.html',
  styleUrl: './skill-display.component.scss',
})
export class SkillDisplayComponent {
  @Input() skill!: Skill;
  @Input() relatedAttributeModifier!: number;
  @ViewChild('skillOverlay') skillOverlay!: OverlayPanel;
  @Output() skillChanges = new EventEmitter<any>();

  public advancementGained() {
    this.skillChanges.emit();
  }
}
