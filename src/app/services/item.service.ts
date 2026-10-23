import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from '../models/common.model';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2/item';

  getItemList(limit = 24, offset = 0): Observable<ListResponse> {
    return this.http.get<ListResponse>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getItem(idOrName: string | number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${idOrName}`);
  }
}
