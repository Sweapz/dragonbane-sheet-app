import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { AttributeDisplayComponent } from './attribute-display/attribute-display.component';
import { CommonModule } from '@angular/common';
import { CharacterStats } from '../../models/character/character-stats';
import { CharacterService } from '../services/character.service';
import { EssentialInfoDisplayComponent } from './essential-info-display/essential-info-display.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    AttributeDisplayComponent,
    CommonModule,
    EssentialInfoDisplayComponent,
  ],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
})
export class SheetComponent {
  constructor(
    private itemsService: ItemsService,
    private characterService: CharacterService
  ) {}

  character!: CharacterStats;

  ngOnInit() {
    // this.itemsService
    //   .getAllEquipment('http://localhost:3000/equipment')
    //   .subscribe((equipment: EquipmentDbo) => {
    // });

    this.characterService.getCharacter().subscribe({
      next: (data) => {
        this.character = data.character;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public saveChanges() {
    console.log('changes');
    this.characterService.saveCharacter(this.character).subscribe({
      next: (data) => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
}
