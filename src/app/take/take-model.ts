import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('takes')
export class Take extends Resource {
  uri: string;
  amount: number;
  weight: number;
  location: string;
  date:string;
  _links: any;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

  public get id() : string {
    let uriArray=this.uri.split("/")
    return uriArray.pop();
  }
}

