import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ItemParams } from '../../models/params';
import { ItemDbo } from '../../models/items/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private apiService: ApiService) {}

  public getItemsBasedOnQuery(url: string, params: ItemParams): Observable<any> {
    return this.apiService.get(url, {
      params,
    });
  }

  public getAllEquipment(url: string): Observable<ItemDbo> {
    return this.apiService.get(url);
  }
}
