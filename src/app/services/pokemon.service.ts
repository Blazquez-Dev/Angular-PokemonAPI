import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from '../models/common.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemonList(limit = 24, offset = 0): Observable<ListResponse> {
    return this.http.get<ListResponse>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemon(idOrName: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/${idOrName}`);
  }
}
