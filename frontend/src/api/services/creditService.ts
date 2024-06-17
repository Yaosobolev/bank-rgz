import { Credit, DynamicCreditData } from "@/types/credit";
import { AxiosResponse } from "axios";
import { instance } from "../config";

export const creditService = {
  createCredit: async (loginData: Credit): Promise<AxiosResponse<Credit>> => {
    const response = await instance.post<Credit>(`/credits`, {
      number: loginData.number,
      issueDate: loginData.issueDate,
      creditAmount: loginData.creditAmount,
      usagePeriod: loginData.usagePeriod,
      interestRate: loginData.interestRate,
      monthlyPayment: loginData.monthlyPayment,
      clientId: loginData.clientId,
      creditExpertId: loginData.creditExpertId,
      creditPurposeId: loginData.creditPurposeId,
      accountId: loginData.accountId,
    });
    return response;
  },
  updateCredit: async (
    loginData: DynamicCreditData
  ): Promise<AxiosResponse<Credit>> => {
    const response = await instance.put<Credit>(`/credits/${loginData.id!}`, {
      creditAmount: loginData.creditAmount!,
      usagePeriod: loginData.usagePeriod!,
      interestRate: loginData.interestRate!,
      monthlyPayment: loginData.monthlyPayment!,
    });
    return response;
  },
};
