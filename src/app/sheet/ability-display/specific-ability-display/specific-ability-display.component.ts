import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HeroicAbility } from '../../../../models/character/heroic-ability';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule, OverlayPanel } from 'primeng/overlaypanel';
import { CommonModule } from '@angular/common';
import { CharacterStats } from '../../../../models/character/character-stats';
import { AbilityRequirement } from '../../../../models/character/ability-requirement';

@Component({
  selector: 'app-specific-ability-display',
  standalone: true,
  imports: [ButtonModule, OverlayPanelModule, CommonModule],
  templateUrl: './specific-ability-display.component.html',
  styleUrl: './specific-ability-display.component.scss',
})
export class SpecificAbilityDisplayComponent {
  @Input() ability!: HeroicAbility;
  @Input() character!: CharacterStats;
  @Input() known!: boolean;
  @Output() abilityEmitter = new EventEmitter<[HeroicAbility, boolean]>();

  @ViewChild('abilityOverlay') abilityOverlay!: OverlayPanel;

  public getAbilityRequirements(requirements: AbilityRequirement): string {
    if (!requirements) {
      return '-';
    } else if (requirements.skillIds.length > 1) {
      const validSkills = this.character.skills.filter((x) =>
        requirements.skillIds.includes(x.id)
      );
      let validSkillsString: string = '';

      validSkills?.forEach((skill, index) => {
        if (index !== validSkills.length - 1) {
          validSkillsString += skill.name + ', ';
        } else {
          validSkillsString += ' or ' + skill.name;
        }
      });

      return 'Any of: ' + validSkillsString + ' with a score of 12 or higher.';
    }

    const validSkill = this.character.skills.find(
      (x) => x.id === requirements.skillIds[0]
    );
    return validSkill?.name + ' with a score of 12 or higher.';
  }

  public toTitleCase(str: any) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word: any) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  public learningAbilityClicked() {
    if (this.known) {
      this.unlearnAbility();
    } else {
      this.learnAbility();
    }

    this.abilityEmitter.emit([this.ability, this.known])
  }

  private unlearnAbility() {
    const index = this.character.abilities.findIndex(
      (x) => x.id === this.ability.id
    );
    if (index > -1) {
      this.character.abilities.splice(index, 1);
    }
  }

  private learnAbility() {
    this.character.abilities.push(this.ability);
  }
}
