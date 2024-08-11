import { Equipment } from "./equipment";

export class Armor extends Equipment {

}

export interface ArmorDbo {
  armorList: Armor[];
}