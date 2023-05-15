import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('seeds')
export class Seed extends Resource {
  uri: string;
  scientificName: string;
  commonName: string[];
  _links: any;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

  public get id(): string {
    let uriArray = this.uri.split('/');
    return uriArray.pop();
  }
}
