import { Equipment } from "./equipment";

export class Clothes extends Equipment {

}

export interface ClothesDbo {
  clothesList: Clothes[];
}