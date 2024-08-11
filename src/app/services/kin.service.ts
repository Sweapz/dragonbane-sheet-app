import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KinService {
  constructor(private apiService: ApiService) {}

  public getAllKin(): Observable<any> {
    return this.apiService.get('http://localhost:3000/kin');
  }
}
