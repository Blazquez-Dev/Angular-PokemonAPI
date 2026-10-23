import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from '../models/common.model';
import { Berry } from '../models/berry.model';

@Injectable({ providedIn: 'root' })
export class BerryService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2/berry';

  getBerryList(limit = 24, offset = 0): Observable<ListResponse> {
    return this.http.get<ListResponse>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getBerry(idOrName: string | number): Observable<Berry> {
    return this.http.get<Berry>(`${this.baseUrl}/${idOrName}`);
  }
}
