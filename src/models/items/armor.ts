import { Item } from "./item";

export class Armor extends Item {
  public armorRating!: number;
}

export interface ArmorDbo {
  armorList: Armor[];
}