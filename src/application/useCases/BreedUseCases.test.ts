//write units test to check BreedUseCases
import { getBreadList, getBreedByName, getBreedImage } from "./BreedUseCases";
import MockBreedRepository from "../../infrastructure/Repositories/MockBreedRepository";

const api = new MockBreedRepository();

describe("BreedUseCases", () => {
  it("should be defined", () => {
    expect(getBreadList).toBeDefined();
    expect(getBreedByName).toBeDefined();
    expect(getBreedImage).toBeDefined();
  });

  it("should return a list of breeds", async () => {
    const result = await getBreadList(api);
    let expected = result.length;
    expect(expected).toBeGreaterThan(0);
  });

  it("should return a breed by name", async () => {
    const result = await getBreedByName(api, "beagle");
    let expected = result.breedName;
    expect(expected).toBe("beagle");
  });

  it("should return a breed image string", async () => {
    const result = await getBreedImage(api, "beagle");
    let expected = result;
    expect(expected).toBe(
      "https://images.dog.ceo/breeds/beagle/n02088364_876.jpg"
    );
  });
});
