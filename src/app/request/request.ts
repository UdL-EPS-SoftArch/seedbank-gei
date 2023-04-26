import {Batch} from "../batch";
import {Propagator} from "../propagator";
import {Take} from "../take";
import {HateoasResource} from "@lagoshny/ngx-hateoas-client";

@HateoasResource('requests')
export class Request extends Batch {
  propagator: Propagator
  fulfilledBy: Take
}
