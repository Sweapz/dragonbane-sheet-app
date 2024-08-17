import { AttributeEnum } from "../enums/attribute-enum";

export interface Skill {
  name: string;
  description: string;
  relatedAttribute: AttributeEnum;

  trained: boolean;
  advancement: boolean;
}