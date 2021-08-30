import Breed from "../../domain/entities/Breed";
import BreedRepository from "../../domain/interfaces/BreedRepository";

export async function getBreadList(
  breedRepository: BreedRepository
): Promise<Breed[]> {
  //get all breeds
  let breedList = await breedRepository.getList();

  return breedList;
}

export function getBreedByName(
  breedRepository: BreedRepository,
  breedName: string
): Promise<Breed> {
  return breedRepository.getByName(breedName);
}

export function getBreedImage(
  breedRepository: BreedRepository,
  breedName: string
): Promise<string> {
  return breedRepository.getImageByBreed(breedName);
}
