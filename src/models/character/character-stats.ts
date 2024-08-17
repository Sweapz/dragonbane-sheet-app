import { Item } from "../items/item";
import { Ability } from "./ability";
import { CharacterAttribute } from "./attribute";
import { DeathSaves } from "./death-saves";
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

  // Weapon skills
  axes: Skill;
  bows: Skill;
  brawling: Skill;
  crossbows: Skill;
  hammers: Skill;
  knives: Skill;
  slings: Skill;
  spears: Skill;
  staves: Skill;
  swords: Skill;

  // Core skills
  acrobatics: Skill;
  awareness: Skill;
  bartering: Skill;
  beastLore: Skill;
  bluffing: Skill;
  bushcraft: Skill;
  crafting: Skill;
  evade: Skill;
  healing: Skill;
  huntingAndFishing: Skill;
  languages: Skill;
  legends: Skill;
  performance: Skill;
  persuasion: Skill;
  riding: Skill;
  seamanship: Skill;
  sleightOfHand: Skill;
  sneaking: Skill;
  spotHidden: Skill;
  swimming: Skill;

  // Abilities
  abilities: Ability[];

  // Inventory
  inventory: Item[];
  gold: number;
  silver: number;
  copper: number;
}