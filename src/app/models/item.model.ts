import { NamedResource } from './common.model';

export interface Item {
  id: number;
  name: string;
  cost: number;
  category: NamedResource;
  sprites: { default: string | null };
  attributes: NamedResource[];
  effect_entries: { effect: string; short_effect: string; language: NamedResource }[];
}
