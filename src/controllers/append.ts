import { appendToArray } from "../helpers";

interface appendResponse {
  data: any[];
}

export default class AppendController {
  public async manipulateArray(
    start: string,
    end: string
  ): Promise<appendResponse> {
    let data = await appendToArray(start, end);
    return { data };
  }
}
