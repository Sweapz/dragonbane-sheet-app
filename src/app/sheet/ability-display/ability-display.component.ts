import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterStats } from '../../../models/character/character-stats';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { AbilitiesService } from '../../services/abilities.service';
import { HeroicAbility } from '../../../models/character/heroic-ability';
import { SpecificAbilityDisplayComponent } from './specific-ability-display/specific-ability-display.component';
import { UtilityService } from '../../services/utility.service';
import { Skill } from '../../../models/character/skill';

@Component({
  selector: 'app-ability-display',
  standalone: true,
  imports: [
    DividerModule,
    CommonModule,
    FormsModule,
    ScrollPanelModule,
    AccordionModule,
    SpecificAbilityDisplayComponent,
  ],
  templateUrl: './ability-display.component.html',
  styleUrl: './ability-display.component.scss',
})
export class AbilityDisplayComponent {
  @Input() character!: CharacterStats;
  @Output() changeEmitter = new EventEmitter<any>();

  allAbilities!: HeroicAbility[];
  allLearnableAbilities!: HeroicAbility[];

  constructor(
    private abilitiesService: AbilitiesService,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.abilitiesService.getAllAbilities().subscribe({
      next: (data) => {
        this.allAbilities = data.abilities;
        this.allLearnableAbilities = this.getAllLearnableAbilities();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public updateAbilityLists(value: [HeroicAbility, boolean]) {
    if (value[1]) {
      this.allLearnableAbilities.push(value[0]);
      this.allLearnableAbilities = this.allLearnableAbilities.sort(
        (n1, n2) => n1.id - n2.id
      );
    } else {
      const index = this.allLearnableAbilities.findIndex(
        (x) => x.id === value[0].id
      );
      if (index > -1) {
        this.allLearnableAbilities.splice(index, 1);
      }
    }

    this.changeEmitter.emit();
  }

  private getAllLearnableAbilities(): HeroicAbility[] {
    return this.allAbilities
      .filter((ability) => {
        if (!ability.requirement) {
          return true;
        } else {
          return this.character.skills.some(
            (skill) =>
              ability.requirement.skillIds.includes(skill.id) &&
              this.getSkillModifier(skill) >= ability.requirement.requiredLevel
          );
        }
      })
      .filter(
        (ability) => !this.character.abilities.find((x) => x.id === ability.id)
      );
  }

  private getSkillModifier(skill: Skill): number {
    const attributeModifier = this.utilityService.getAttributeMod(
      skill.relatedAttribute,
      this.character
    );

    return skill.trained ? attributeModifier * 2 : attributeModifier;
  }
}
