import Breed from "../entities/Breed";

export default interface BreadRepository {
  getList(): Promise<Breed[]>;
  getByName(name: string): Promise<Breed>;
  getBySubbreed(name: string): Promise<Breed[]>;
}
