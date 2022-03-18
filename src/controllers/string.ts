import { reverseString, vowelsToUpperCase } from "../helpers";

interface stringResponse {
  alteredPhrase: string;
}

export default class StringController {
  public async manipulateString(phrase: string): Promise<stringResponse> {
    let alteredPhrase: string = "";

    alteredPhrase = await reverseString(phrase);
    alteredPhrase = await vowelsToUpperCase(alteredPhrase);
    return {
      alteredPhrase,
    };
  }
}
