import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { BerryService } from '../../services/berry.service';
import { BerryItemComponent } from '../berry-item/berry-item.component';
import { idFromUrl } from '../../utils/id-from-url';

@Component({
  selector: 'app-berry-list',
  standalone: true,
  imports: [AsyncPipe, NgbPagination, BerryItemComponent],
  templateUrl: './berry-list.component.html',
})
export class BerryListComponent {
  private service = inject(BerryService);
  readonly pageSize = 24;
  page = 1;
  private page$ = new BehaviorSubject<number>(1);

  data$ = this.page$.pipe(
    switchMap((p) => this.service.getBerryList(this.pageSize, (p - 1) * this.pageSize)),
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
