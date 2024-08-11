import { ArmorDbo } from "./armor";
import { ClothesDbo } from "./clothes";
import { Item } from "./item";
import { WeaponDbo } from "./weapon";

export class Equipment extends Item {}

export interface EquipmentDbo {
  armors: ArmorDbo,
  clothes: ClothesDbo
  weapons: WeaponDbo,
}