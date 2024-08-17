import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { AttributeDisplayComponent } from './attribute-display/attribute-display.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CharacterStats } from '../../models/character/character-stats';
import { CharacterService } from '../services/character.service';
import { EssentialInfoDisplayComponent } from './essential-info-display/essential-info-display.component';
import { HpWpDisplayComponent } from './hp-wp-display/hp-wp-display.component';
import { SkillCollectionDisplayComponent } from './skill-collection-display/skill-collection-display.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    AttributeDisplayComponent,
    FormsModule,
    CommonModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    EssentialInfoDisplayComponent,
    HpWpDisplayComponent,
    SkillCollectionDisplayComponent,
    TabViewModule,
  ],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
})
export class SheetComponent {
  constructor(
    private itemsService: ItemsService,
    private characterService: CharacterService
  ) {}

  character!: CharacterStats;

  ngOnInit() {
    // this.itemsService
    //   .getAllEquipment('http://localhost:3000/equipment')
    //   .subscribe((equipment: EquipmentDbo) => {
    // });

    this.characterService.getCharacter().subscribe({
      next: (data) => {
        this.character = data.character;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public saveChanges() {
    this.characterService.saveCharacter(this.character).subscribe({
      next: (data) => {},
      error: (error) => {
        console.log(error);
      },
    });
  }

  public getMovementSpeed(): number {
    return this.character.kin.baseMovement + this.getAgillityModifier();
  }

  public getAgilityBonus(): string {
    switch (true) {
      case this.character.agillity.score <= 12:
        return '-';
      case this.character.agillity.score >= 13 &&
        this.character.agillity.score <= 16:
        return '1d4';
      case this.character.agillity.score >= 17 &&
        this.character.agillity.score <= 18:
        return '1d6';
      default:
        throw new Error('Attribute score out of range.');
    }
  }

  public getStrengthBonus(): string {
    switch (true) {
      case this.character.strength.score <= 12:
        return '-';
      case this.character.strength.score >= 13 &&
        this.character.strength.score <= 16:
        return '1d4';
      case this.character.strength.score >= 17 &&
        this.character.strength.score <= 18:
        return '1d6';
      default:
        throw new Error('Attribute score out of range.');
    }
  }

  private getAgillityModifier(): number {
    switch (true) {
      case this.character.agillity.score >= 1 &&
        this.character.agillity.score <= 6:
        return -4;
      case this.character.agillity.score >= 7 &&
        this.character.agillity.score <= 9:
        return -2;
      case this.character.agillity.score >= 9 &&
        this.character.agillity.score <= 12:
        return 0;
      case this.character.agillity.score >= 13 &&
        this.character.agillity.score <= 15:
        return 2;
      case this.character.agillity.score >= 16 &&
        this.character.agillity.score <= 18:
        return 4;
      default:
        throw new Error('Attribute score out of range.');
    }
  }
}
