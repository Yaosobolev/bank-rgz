import { Credit } from "@/types/credit";
import { AxiosResponse } from "axios";
import { instance } from "../config";

export const reportService = {
  reportUsersCredit: async (
    loginData: number
  ): Promise<AxiosResponse<Credit[]>> => {
    const response = await instance.get<Credit[]>(`/reports/bank/${loginData}`);
    return response;
  },
  reportUsersCreditCurrencies: async (
    cur: string,
    bankId: number
  ): Promise<AxiosResponse<Credit[]>> => {
    const response = await instance.get<Credit[]>(
      `/reports/currency/${cur}/bank/${bankId}`
    );
    return response;
  },
  reportCreditExpert: async (
    expertId: number
  ): Promise<AxiosResponse<Credit[]>> => {
    const response = await instance.get<Credit[]>(
      `/reports/expert/${expertId}`
    );
    return response;
  },
  creditClient: async (clientId: number): Promise<AxiosResponse<Credit[]>> => {
    const response = await instance.get<Credit[]>(`/credits/${clientId}`);
    return response;
  },
};
