import { Injectable } from '@angular/core';
import { AttributeEnum } from '../../models/enums/attribute-enum';
import { CharacterStats } from '../../models/character/character-stats';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  public getAttributeMod(attribute: AttributeEnum, character: CharacterStats): number {
    switch (attribute) {
      case AttributeEnum.Strength:
        return this.getAttributeModifier(character.strength.score);
      case AttributeEnum.Constitution:
        return this.getAttributeModifier(character.constitution.score);
      case AttributeEnum.Agillity:
        return this.getAttributeModifier(character.agillity.score);
      case AttributeEnum.Intelligence:
        return this.getAttributeModifier(character.intelligence.score);
      case AttributeEnum.Willpower:
        return this.getAttributeModifier(character.willpower.score);
      case AttributeEnum.Charisma:
        return this.getAttributeModifier(character.charisma.score);
      default:
        throw new Error('Attribute does not exist.');
    }
  }

  public getAttributeModifier(score: number): number {
    switch (true) {
      case score >= 1 && score <= 5:
        return 3;
      case score >= 6 && score <= 8:
        return 4;
      case score >= 9 && score <= 12:
        return 5;
      case score >= 13 && score <= 16:
        return 6;
      case score >= 17 && score <= 18:
        return 7;
      default:
        throw new Error('Attribute score out of range.');
    }
  }
}
