import Breed from "../../domain/entities/Breed";
import BreedRepository from "../../domain/interfaces/BreedRepository";

export default class ApiBreedRepository implements BreedRepository {
  async getList(): Promise<Breed[]> {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message).map(
      (breedName) => new Breed(breedName, data.message[breedName])
    );
    return breeds;
  }

  async getByName(name: string): Promise<Breed> {
    const response = await fetch(`https://dog.ceo/api/breed/${name}/images`);
    const data = await response.json();
    return new Breed(name, [], Array.from(data.message));
  }

  getBySubbreed(name: string): Promise<Breed[]> {
    throw new Error("Method not implemented.");
  }
}
