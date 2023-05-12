import { HateoasResource } from "@lagoshny/ngx-hateoas-client";
import { Batch } from "./batch";
import { Propagator } from "./propagator";

@HateoasResource('takes')
export class Take extends Batch {
    propagator: Propagator;
}
