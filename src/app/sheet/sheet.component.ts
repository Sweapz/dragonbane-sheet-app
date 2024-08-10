import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { AttributeDisplayComponent } from './attribute-display/attribute-display.component';
import { CharacterAttribute } from '../../models/attribute';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [AttributeDisplayComponent, CommonModule],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
})
export class SheetComponent {
  constructor(private itemsService: ItemsService) {}

  attributes: CharacterAttribute[] = [];

  ngOnInit() {
    // this.itemsService
    //   .getAllEquipment('http://localhost:3000/equipment')
    //   .subscribe((equipment: EquipmentDbo) => {
    // });

    this.attributes = [
      { title: 'Strength', score: 11, modifier: 5},
      { title: 'Constitution', score: 12, modifier: 5},
      { title: 'Agillity', score: 15, modifier: 6},
      { title: 'Intelligence', score: 15, modifier: 6},
      { title: 'Willpower', score: 12, modifier: 5},
      { title: 'Charisma', score: 12, modifier: 5},
    ]
  }
}
