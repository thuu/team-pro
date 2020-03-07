import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private apiService: ApiService) {
  }

  schedule(): Observable<any[]>  {
    return this.apiService.get('/events');
  }
}
