import axios from "axios";
import { filterData, sortData } from "../helpers";
import { ICountry } from "../interfaces/country.interface";

interface countriesResponse {
  data: ICountry[];
}

export default class CountriesController {
  public async getCountries(
    filter: string = "",
    order: string = ""
  ): Promise<countriesResponse> {
    let data: ICountry[];

    data = await (
      await axios.get("https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8")
    ).data;

    if (filter !== "") {
      data = filterData(data, filter);
    }
    if (order !== "") {
      data = sortData(data, order);
    }
    return {
      data: data,
    };
  }
}
