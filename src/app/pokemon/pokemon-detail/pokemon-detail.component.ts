import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { map, switchMap } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink, NgbProgressbar],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(PokemonService);

  pokemon$ = this.route.paramMap.pipe(
    map((p) => p.get('id')!),
    switchMap((id) => this.service.getPokemon(id))
  );
}
