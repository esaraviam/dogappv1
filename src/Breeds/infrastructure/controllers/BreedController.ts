import Breed from "../../domain/entities/Breed";
import ApiBreedRepository from "../Repositories/ApiBreedRepository";

import {
  getBreadList,
  getBreedByName,
  getBreedImage,
} from "../../application/useCases/BreedUseCases";

const api = new ApiBreedRepository();

export default class BreedController {
  static async getAllBreeds(): Promise<Breed[]> {
    return getBreadList(api);
  }

  static async getBreedByName(breedName: string): Promise<Breed> {
    return getBreedByName(api, breedName);
  }

  static async getBreedImage(breedName: string): Promise<string> {
    return getBreedImage(api, breedName);
  }
}
