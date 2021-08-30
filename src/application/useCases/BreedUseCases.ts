import Breed from "../../domain/entities/Breed";
import BreedRepository from "../../domain/interfaces/BreedRepository";

export function getBreadList(
  breedRepository: BreedRepository
): Promise<Breed[]> {
  return breedRepository.getList();
}

export function getBreedByName(
  breedRepository: BreedRepository,
  breedName: string
): Promise<Breed> {
  return breedRepository.getByName(breedName);
}
