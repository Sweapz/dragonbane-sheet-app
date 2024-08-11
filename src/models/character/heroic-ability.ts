import { Ability } from "./ability";
import { AbilityRequirement } from "./ability-requirement";

export class HeroicAbility extends Ability {
  requirement!: AbilityRequirement;
}