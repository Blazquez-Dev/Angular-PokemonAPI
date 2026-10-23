import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-berry-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './berry-item.component.html',
})
export class BerryItemComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;

  get image(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${this.name}-berry.png`;
  }
}
