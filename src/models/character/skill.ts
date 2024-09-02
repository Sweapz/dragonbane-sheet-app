import { AttributeEnum } from "../enums/attribute-enum";

export interface Skill {
  id: number;
  name: string;
  description: string;
  relatedAttribute: AttributeEnum;

  trained: boolean;
  advancement: boolean;
  advancementLevel: number;
}