import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CharacterAttribute } from '../../../models/character/attribute';

@Component({
  selector: 'app-attribute-display',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './attribute-display.component.html',
  styleUrl: './attribute-display.component.scss',
})
export class AttributeDisplayComponent {
  @Input() attribute!: CharacterAttribute;
  @Input() condition!: boolean;
  @Output() conditionChange = new EventEmitter<boolean>();

  public applyCondition() {
    this.condition = !this.condition;
    this.conditionChange.emit(this.condition);
  }

  public getAttributeModifier(): number {
    switch (true) {
      case this.attribute.score >= 1 && this.attribute.score <= 5:
        return 3;
      case this.attribute.score >= 6 && this.attribute.score <= 8:
        return 4;
      case this.attribute.score >= 9 && this.attribute.score <= 12:
        return 5;
      case this.attribute.score >= 13 && this.attribute.score <= 16:
        return 6;
      case this.attribute.score >= 17 && this.attribute.score <= 18:
        return 7;
      default:
        throw new Error('Attribute score out of range.');
    }
  }
}
