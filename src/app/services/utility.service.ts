import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  getAttributeModifier(score: number): number {
    switch (true) {
      case score >= 1 && score <= 5:
        return 3;
      case score >= 6 && score <= 8:
        return 4;
      case score >= 9 && score <= 12:
        return 5;
      case score >= 13 && score <= 16:
        return 6;
      case score >= 17 && score <= 18:
        return 7;
      default:
        throw new Error('Attribute score out of range.');
    }
  }
}
