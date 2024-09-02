import { Item } from "./item";

export class Weapon extends Item {
  public strengthRequirement!: number;
  public range!: string;
  public damage!: string;
  public durability!: number;
}

export interface WeaponDbo {
  weaponList: Weapon[];
}