import { NamedResource } from './common.model';

export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedResource;
  natural_gift_type: NamedResource;
  flavors: { potency: number; flavor: NamedResource }[];
  item: NamedResource;
}
