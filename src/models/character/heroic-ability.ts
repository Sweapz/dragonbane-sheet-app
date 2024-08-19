import { AbilityRequirement } from "./ability-requirement";

export interface HeroicAbility {
  id: number;
  requirement: AbilityRequirement;
  name: string;
  willpowerCost: number;
  description: string;
}