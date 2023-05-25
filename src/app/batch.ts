import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {Seed} from "./seed/seed";

@HateoasResource('batch')
export class Batch extends Resource {
  amount: number;
  weight: number;
  location: string;
  date: Date;
  of: Seed | undefined | null;
}
