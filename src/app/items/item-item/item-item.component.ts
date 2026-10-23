import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-item.component.html',
})
export class ItemItemComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;

  get image(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.name}.png`;
  }
}
