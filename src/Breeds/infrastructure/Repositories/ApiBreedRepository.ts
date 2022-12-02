import Breed from "../../domain/entities/Breed";
import BreedRepository from "../../domain/interfaces/BreedRepository";

export default class ApiBreedRepository implements BreedRepository {
  async getList(): Promise<Breed[]> {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      const breeds = Object.keys(data.message).map(
        (breedName) => new Breed(breedName, data.message[breedName])
      );
      return breeds;
    } catch (error) {
      return new Promise<Breed[]>((resolve, reject) => {
        reject(error);
      });
    }
  }

  async getByName(breed: string): Promise<Breed> {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    return new Breed(breed, [], Array.from(data.message));
  }

  getBySubbreed(name: string): Promise<Breed[]> {
    throw new Error("Method not implemented.");
  }
  async getImageByBreed(breed: string): Promise<string> {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/1`
    );

    const data = await response.json();

    return data.message[0];
  }
}
