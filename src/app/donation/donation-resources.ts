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

export async function getPropagatorFrom(donation: Donation): Promise<Propagator | null> {
  const takes: Take | null = await getTakeFrom(donation);
  if (takes === null) return Promise.resolve(null)
  return await getPropagatorFor(takes);
}

async function getPropagatorFor(take: Take): Promise<Propagator | null> {
  try {
    return (await firstValueFrom(take.getRelation<Propagator>(propagatorResource)))
  } catch (e) {
    return Promise.resolve(null)
  }
}

export async function getTakeFrom(donation: Donation): Promise<Take | null> {
  try {
    return (await firstValueFrom(donation.getRelation<Take>(takeResource)));
  } catch(e) {
    return Promise.resolve(null);
  }
}

export async function loadResourcesRecursivelyFor(donation: Donation): Promise<void> {
  donation.donor = await getDonorFrom(donation);
  donation.takeBy = await getTakeFrom(donation);
  if (donation.takeBy !== null) {
    donation.takeBy.propagator = await getPropagatorFor(donation.takeBy);
  }
}
