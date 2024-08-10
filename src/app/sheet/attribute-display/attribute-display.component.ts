import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CharacterAttribute } from '../../../models/attribute';

@Component({
  selector: 'app-attribute-display',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './attribute-display.component.html',
  styleUrl: './attribute-display.component.scss',
})
export class AttributeDisplayComponent {
  @Input() attribute!: CharacterAttribute;
}
