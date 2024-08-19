import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {
  constructor(private apiService: ApiService) {}

  public getAllAbilities(): Observable<any> {
    return this.apiService.get('http://localhost:3000/abilities');
  }
}
