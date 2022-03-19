import app from "../server";
import request from "supertest";
import { reverseString, allVowelsAreUpperCase } from "../helpers";

describe("Test String Controller", () => {
  it("Request manipulateString should return the given string reversed and with uppercased vowels", () => {
    return request(app)
      .get("/reverse/anitalavalatina")
      .then((response) => {
        const alteredPhrase = response.body.alteredPhrase;
        let isReversed = true;
        const originalPhrase = "anitalavalatina";
        isReversed =
          reverseString(alteredPhrase.toLowerCase()) === originalPhrase;
        expect(isReversed).toBe(true);
        expect(allVowelsAreUpperCase(alteredPhrase)).toBe(true);
      });
  });
});
