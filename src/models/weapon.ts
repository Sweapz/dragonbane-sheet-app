import { Equipment } from "./equipment";

export class Weapon extends Equipment {

}

export interface WeaponDbo {
  weaponList: Weapon[];
}