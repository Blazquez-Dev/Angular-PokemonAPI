import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-item.component.html',
})
export class PokemonItemComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;

  get image(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }
}
