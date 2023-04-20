import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import { Batch } from '../batch';
import { Take } from '../take';

@HateoasResource('donations')
export class Donation extends Batch {
  donor: Donation
  takeBy: Take
}
