import { Supply } from "./supply";

export class Item {
  public cost: Number;
  public supply: Supply;
  public name: string;

  constructor(item?: any) {
    this.cost = item.cost;
    this.supply = item.supply;
    this.name = item.name;
  }
}