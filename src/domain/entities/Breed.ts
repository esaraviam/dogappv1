import { Entity } from "./Entity";

export default class Breed extends Entity {
  breedName: string;
  subBreeds: string[] = [];
  images: string[] = [];
  defaultImage: string;
  constructor(
    breedName: string,
    subBreeds: string[] = [],
    images: string[] = [],
    defaultImage: string = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
  ) {
    super();
    this.breedName = breedName;
    this.subBreeds = subBreeds;
    this.images = images;
    this.defaultImage = defaultImage;
  }
}
