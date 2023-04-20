import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('batch')
export class Batch extends Resource {
    id: number;
    amount: number;
    weight: number;
    location: string;
    date: string; // TODO: Is this a String? On the API has ZoneDateTime
}
