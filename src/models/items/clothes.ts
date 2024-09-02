import { Item } from "./item";

export class Clothes extends Item {

}

export interface ClothesDbo {
  clothesList: Clothes[];
}