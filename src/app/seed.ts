import {HateoasResource, Resource} from "@lagoshny/ngx-hateoas-client";

@HateoasResource('seeds')
export class Seed extends Resource {
    id: number;
    scientificName: string;
    commonName: string[];
}
