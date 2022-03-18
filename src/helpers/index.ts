import { config } from "dotenv";
import { ICountry } from "../interfaces/country.interface";
config();

export function filterData(data: ICountry[], filterBy: string): ICountry[] {
  let filteredData: ICountry[];

  filteredData = data.filter((element) => {
    return (
      element.country.toLowerCase().includes(filterBy.toLowerCase()) ||
      element.code.toLowerCase().includes(filterBy.toLowerCase())
    );
  });
  return filteredData;
}

export function sortData(data: ICountry[], orderBy: string): ICountry[] {
  let sortedData: ICountry[];

  sortedData = data.sort((a: ICountry, b: ICountry) => {
    if (orderBy === "asc") {
      if (a.vat > b.vat) return 1;
      if (a.vat < b.vat) return -1;
      return 0;
    } else if (orderBy === "desc") {
      if (a.vat < b.vat) return 1;
      if (a.vat > b.vat) return -1;
      return 0;
    } else {
      return 0;
    }
  });
  return sortedData;
}

export function sorted(data: any, order: string) {
  let flag = true;
  for (let i = 0; i < data.length; i++) {
    if (data[i + 1]) {
      if (order === "asc") {
        if (!(data[i].vat <= data[i + 1].vat)) flag = false;
      } else if (order === "desc") {
        if (!(data[i].vat >= data[i + 1].vat)) flag = false;
      }
    }
  }
  return flag;
}

export function reverseString(phrase: string) {
  let reversedString: string = "";
  reversedString = phrase.split("").reverse().join("");
  return reversedString;
}

export function vowelsToUpperCase(phrase: string) {
  let vowelsUpperCased: string = "";
  vowelsUpperCased = phrase
    .split("")
    .map((c) => {
      return ["a", "e", "i", "o", "u"].includes(c) ? c.toUpperCase() : c;
    })
    .join("");

  return vowelsUpperCased;
}

export function appendToArray(start: string, end: string): any[] {
  let newArray: any[] = [];

  newArray.push(start);
  newArray.push(...JSON.parse(process.env.SIMPLE_ARRAY as any));
  newArray.push(end);

  return newArray;
}

export function allVowelsAreUpperCase(phrase: string): boolean {
  let flag = true;
  let phraseChars = phrase.split("");
  for (const c of phraseChars) {
    if (["a", "e", "i", "o", "u"].includes(c) && c.match(/[a-zA-Z]/)) {
      flag = false;
      break;
    }
  }
  return flag;
}
