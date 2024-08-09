import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { EquipmentDbo } from '../../models/equipment';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
})
export class SheetComponent {
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService
      .getItemsBasedOnQuery('http://localhost:3000/items', {
        type: 'tradeGoods',
        category: 'none'
      })
      .subscribe((res: any) => {
        const queriedItems = res.res;

        console.log(queriedItems)
      });

    this.itemsService
      .getAllEquipment('http://localhost:3000/equipment')
      .subscribe((equipment: EquipmentDbo) => {
        console.log(equipment)
      });
  }
}
