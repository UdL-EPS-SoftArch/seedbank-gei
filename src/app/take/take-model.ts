import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('takes')
export class Take extends Resource {
  amount: number;
  weight: number;
  location: string;
  date: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}

