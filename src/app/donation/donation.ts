import { HateoasResource } from '@lagoshny/ngx-hateoas-client';
import { Batch } from '../batch';
import { Take } from '../take';
import { Donor } from '../donor';
import {donationsResource} from "./donation-keys";

@HateoasResource(donationsResource)
export class Donation extends Batch {
  donor: Donor
  takeBy: Take | null
  target: Request | null
}
