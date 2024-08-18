import { AbilityRequirement } from "./ability-requirement";

export interface HeroicAbility {
  requirement: AbilityRequirement;
  name: string;
  willpowerCost: number;
  description: string;
}