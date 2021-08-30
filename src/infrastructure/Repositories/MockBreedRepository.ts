import Breed from "../../domain/entities/Breed";
import BreedRepository from "../../domain/interfaces/BreedRepository";

export default class MockBreedRepository implements BreedRepository {
  getImageByBreed(breed: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async getList(): Promise<Breed[]> {
    const list: Breed[] = [];
    list.push(
      new Breed(
        "hound-afghan",
        [],
        [
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
        ]
      )
    );
    list.push(
      new Breed(
        "beagle",
        [],
        [
          "https://images.dog.ceo/breeds/beagle/1271553739_Milo.jpg",
          "https://images.dog.ceo/breeds/beagle/n02088364_8713.jpg",
          "https://images.dog.ceo/breeds/beagle/n02088364_876.jpg",
        ]
      )
    );
    return new Promise((resolve) => resolve(list));
  }

  async getByName(name: string): Promise<Breed> {
    let buldog = new Breed(
      "beagle",
      [],
      [
        "https://images.dog.ceo/breeds/beagle/1271553739_Milo.jpg",
        "https://images.dog.ceo/breeds/beagle/n02088364_8713.jpg",
        "https://images.dog.ceo/breeds/beagle/n02088364_876.jpg",
      ]
    );
    return new Promise((resolve) => resolve(buldog));
  }
  getBySubbreed(name: string): Promise<Breed[]> {
    throw new Error("Method not implemented.");
  }
}
