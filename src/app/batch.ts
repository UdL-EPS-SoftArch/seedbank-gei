import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('batch')
export class Batch extends Resource {
  id: number;
  amount: number;
  weight: number;
  location: string;
  date: Date;
}
