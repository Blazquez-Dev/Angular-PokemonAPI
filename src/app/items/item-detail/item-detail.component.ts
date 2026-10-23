import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(ItemService);

  item$ = this.route.paramMap.pipe(
    map((p) => p.get('id')!),
    switchMap((id) => this.service.getItem(id))
  );

  effect(item: Item): string {
    const e = item.effect_entries.find((x) => x.language.name === 'en');
    return e ? e.effect : 'Sin descripción disponible.';
  }
}
