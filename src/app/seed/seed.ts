import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('seeds')
export class Seed extends Resource {
  scientificName: string;
  commonName: string[];
}
