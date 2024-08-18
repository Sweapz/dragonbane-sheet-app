import { Item } from "../items/item";
import { CharacterAttribute } from "./attribute";
import { DeathSaves } from "./death-saves";
import { HeroicAbility } from "./heroic-ability";
import { Kin } from "./kin";
import { Skill } from "./skill";
import { Weakness } from "./weakness";

export interface CharacterStats {
  // Essential
  name?: string;
  age: string;
  kin: Kin; 
  profession: string; 
  currentHp: number;
  currentWp: number;
  weakness: Weakness;
  deathSaves: DeathSaves;

  // Rests
  roundRest: boolean;
  stretchRest: boolean;

  // Attributes
  strength: CharacterAttribute;
  constitution: CharacterAttribute;
  agillity: CharacterAttribute;
  intelligence: CharacterAttribute;
  willpower: CharacterAttribute;
  charisma: CharacterAttribute;
  // Conditions
  exhausted: boolean
  sickly: boolean
  dazed: boolean
  angry: boolean
  scared: boolean
  disheartened: boolean

  // Skills
  skills: Skill[];

  // Abilities
  abilities: HeroicAbility[];

  // Inventory
  inventory: Item[];
  gold: number;
  silver: number;
  copper: number;
}