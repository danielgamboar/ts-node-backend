import app from "../index";
import request from "supertest";
import { sorted } from "../helpers";
import { doesNotMatch } from "assert";

describe("Test Country Controller", () => {
  it("Request getCountries with no filter and order params. Should get error", () => {
    return request(app)
      .get("/countries")
      .then((response) => {
        expect(response.body.error).toBeDefined();
      });
  });

  test('Request getCountries should filter the data by country and code that contains "ia" and order it ascendant', () => {
    return request(app)
      .get("/countries?filter=ia&order=asc")
      .then((response) => {
        expect(
          response.body.data[0].country.toLowerCase().includes("ia") ||
            response.body.data[0].code.toLowerCase().includes("ia")
        ).toBe(true);
        const isSorted = sorted(response.body.data, "asc");
        expect(isSorted).toBe(true);
      });
  });
});
