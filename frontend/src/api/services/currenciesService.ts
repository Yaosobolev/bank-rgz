import { Currencies, CurrenciesInput } from "@/types/currencies";
import { AxiosResponse } from "axios";
import { instance } from "../config";

export const currenciesService = {
  updateCurrencies: async (
    loginData: CurrenciesInput
  ): Promise<AxiosResponse<Currencies>> => {
    const response = await instance.put<Currencies>(
      `/currencies/${loginData.id}`,
      {
        exchangeRate: loginData.exchangeRate,
      }
    );
    return response;
  },
};
