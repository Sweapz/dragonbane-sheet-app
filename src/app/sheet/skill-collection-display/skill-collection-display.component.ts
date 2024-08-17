import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillDisplayComponent } from './skill-display/skill-display.component';
import { CharacterStats } from '../../../models/character/character-stats';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { AttributeEnum } from '../../../models/enums/attribute-enum';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-skill-collection-display',
  standalone: true,
  imports: [SkillDisplayComponent, CardModule, CommonModule, DividerModule],
  templateUrl: './skill-collection-display.component.html',
  styleUrl: './skill-collection-display.component.scss',
})
export class SkillCollectionDisplayComponent {
  @Input() character!: CharacterStats;
  @Output() skillsUpdated = new EventEmitter<any>();

  constructor(private utilityService: UtilityService) {}

  public saveSkillChanges() {
    this.skillsUpdated.emit();
  }

  public getAttributeMod(attribute: AttributeEnum): number {
    switch (attribute) {
      case AttributeEnum.Strength:
        return this.utilityService.getAttributeModifier(this.character.strength.score);
      case AttributeEnum.Constitution:
        return this.utilityService.getAttributeModifier(this.character.constitution.score);
      case AttributeEnum.Agillity:
        return this.utilityService.getAttributeModifier(this.character.agillity.score);
      case AttributeEnum.Intelligence:
        return this.utilityService.getAttributeModifier(this.character.intelligence.score);
      case AttributeEnum.Willpower:
        return this.utilityService.getAttributeModifier(this.character.willpower.score);
      case AttributeEnum.Charisma:
        return this.utilityService.getAttributeModifier(this.character.charisma.score);
      default:
        throw new Error('Attribute does not exist.');
    }
  }
}
