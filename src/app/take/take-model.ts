import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('takes')
export class Take extends Resource {
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}

