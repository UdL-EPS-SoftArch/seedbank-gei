import {firstValueFrom} from "rxjs";
import {Donor} from "../donor";
import {Donation} from "./donation";
import {Propagator} from "../propagator";
import {Take} from "../take";

const donorResource: string = "donor";
const takeResource: string = "takenBy";
const propagatorResource: string = "takePropagator";


export async function getDonorFrom(donation: Donation): Promise<Donor> {
  return (await firstValueFrom(donation.getRelation<Donor>(donorResource)));
}

export async function getPropagatorFrom(donation: Donation): Promise<Propagator> {
  const takes = await getTakeFrom(donation);
  return getPropagatorFor(takes);
}

async function getPropagatorFor(take: Take): Promise<Propagator> {
  return (await firstValueFrom(take.getRelation<Propagator>(propagatorResource)))
}

export async function getTakeFrom(donation: Donation): Promise<Take> {
  return (await firstValueFrom(donation.getRelation<Take>(takeResource)));
}

export async function loadResourcesRecursivelyFor(donation: Donation): Promise<void> {
  donation.donor = await getDonorFrom(donation);
  donation.takeBy = await getTakeFrom(donation);
  donation.takeBy.propagator = await getPropagatorFor(donation.takeBy);
}
