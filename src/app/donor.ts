import { HateoasResource } from "@lagoshny/ngx-hateoas-client";
import { User } from "./login-basic/user";

@HateoasResource('donors')
export class Donor extends User {

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}
