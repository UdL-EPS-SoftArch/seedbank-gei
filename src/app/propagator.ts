import {HateoasResource} from "@lagoshny/ngx-hateoas-client";
import {User} from "./login-basic/user";

@HateoasResource('propagators')
export class Propagator extends User {
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
