import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { map, switchMap } from 'rxjs';
import { BerryService } from '../../services/berry.service';

@Component({
  selector: 'app-berry-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink, NgbProgressbar],
  templateUrl: './berry-detail.component.html',
})
export class BerryDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(BerryService);

  berry$ = this.route.paramMap.pipe(
    map((p) => p.get('id')!),
    switchMap((id) => this.service.getBerry(id))
  );

  image(itemName: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${itemName}.png`;
  }
}
