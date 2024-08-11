import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CharacterStats } from '../../models/character/character-stats';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private apiService: ApiService) {}

  public getCharacter(): Observable<any> {
    return this.apiService.get('http://localhost:3000/character');
  }

  public saveCharacter(body: CharacterStats): Observable<any> {
    return this.apiService.put('http://localhost:3000/character', body, {});
  }
}
