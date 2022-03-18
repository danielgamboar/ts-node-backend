import app from "../index";
import request from "supertest";

describe("Test Append Controller", () => {
  it('Request appendToArray should contain a "start" value at the begging, "end" value at the end and SIMPLE_ARRAY in the middle', () => {
    return request(app)
      .get("/append?start=start&end=end")
      .then((response) => {
        const firstElement = response.body.data.shift();
        const lastElement = response.body.data.pop();

        expect(firstElement).toBe("start");
        expect(lastElement).toBe("end");
        expect(
          JSON.stringify(response.body.data) ==
            JSON.stringify(JSON.parse(process.env.SIMPLE_ARRAY as any))
        ).toBe(true);
      });
  });
});
