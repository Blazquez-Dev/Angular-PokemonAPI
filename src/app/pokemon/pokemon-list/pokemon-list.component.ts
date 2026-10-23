import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';
import { idFromUrl } from '../../utils/id-from-url';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, NgbPagination, PokemonItemComponent],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  private service = inject(PokemonService);
  readonly pageSize = 24;
  page = 1;
  private page$ = new BehaviorSubject<number>(1);

  data$ = this.page$.pipe(
    switchMap((p) => this.service.getPokemonList(this.pageSize, (p - 1) * this.pageSize)),
    map((res) => ({
      count: res.count,
      items: res.results.map((r) => ({ id: idFromUrl(r.url), name: r.name })),
    }))
  );

  onPageChange(p: number) {
    this.page = p;
    this.page$.next(p);
  }
}
