import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { ItemService } from '../../services/item.service';
import { ItemItemComponent } from '../item-item/item-item.component';
import { idFromUrl } from '../../utils/id-from-url';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [AsyncPipe, NgbPagination, ItemItemComponent],
  templateUrl: './item-list.component.html',
})
export class ItemListComponent {
  private service = inject(ItemService);
  readonly pageSize = 24;
  page = 1;
  private page$ = new BehaviorSubject<number>(1);

  data$ = this.page$.pipe(
    switchMap((p) => this.service.getItemList(this.pageSize, (p - 1) * this.pageSize)),
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
