import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CharacterAttribute } from '../../../models/character/attribute';
import { UtilityService } from '../../services/utility.service';

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

  constructor(public utilityService: UtilityService) {}

  public applyCondition() {
    this.condition = !this.condition;
    this.conditionChange.emit(this.condition);
  }
}
