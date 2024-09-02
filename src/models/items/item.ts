import { Supply } from "../enums/supply";
import { ArmorDbo } from "./armor";
import { ClothesDbo } from "./clothes";
import { TradeGoodsDbo } from "./trade-goods";
import { WeaponDbo } from "./weapon";

export class Item {
  public cost!: Number;
  public supply!: Supply;
  public name!: string;
  public effect!: string;
}

export interface ItemDbo {
  clothes: ClothesDbo[]; 
  weapons: WeaponDbo[];
  armor: ArmorDbo[];
  tradeGoods: TradeGoodsDbo[];
}