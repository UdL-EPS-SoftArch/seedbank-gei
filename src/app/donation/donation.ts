import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import { Batch } from '../batch';
import { Take } from '../take';
import { Donor } from '../donor';

@HateoasResource('donations')
export class Donation extends Batch {
  donor: Donor
  takeBy: Take
}
