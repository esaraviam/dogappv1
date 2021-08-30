import { Entity } from "./Entity";

export default class Breed extends Entity {
  breedName: string;
  subBreeds: string[] = [];
  images: string[] = [];
  constructor(
    breedName: string,
    subBreeds: string[] = [],
    images: string[] = []
  ) {
    super();
    this.breedName = breedName;
    this.subBreeds = subBreeds;
    this.images = images;
  }
}
