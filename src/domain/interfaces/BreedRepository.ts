import Breed from "../entities/Breed";

export default interface BreadRepository {
  getList(): Promise<Breed[]>;
  getByName(name: string): Promise<Breed>;
  getImageByBreed(breed: string): Promise<string>;
  getBySubbreed(name: string): Promise<Breed[]>;
}
