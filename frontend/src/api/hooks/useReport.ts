import { useQuery } from "@tanstack/react-query";
import { reportService } from "../services/reportService";

export const useReportUsersCredit = (bankId: number) => {
  const reportUsersCredit = useQuery({
    queryKey: ["reportUsersCredit"],
    queryFn: async () => {
      try {
        const { data } = await reportService.reportUsersCredit(bankId);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    enabled: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return reportUsersCredit;
};
export const useReportUsersCreditCurrencies = (cur: string, bankId: number) => {
  const reportUsersCreditCurrencies = useQuery({
    queryKey: ["reportUsersCreditCurrencies"],
    queryFn: async () => {
      try {
        const { data } = await reportService.reportUsersCreditCurrencies(
          cur,
          bankId
        );
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    enabled: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return reportUsersCreditCurrencies;
};
export const useCreditExpert = (expertId: number) => {
  const reportCreditExpert = useQuery({
    queryKey: ["reportCreditExpert"],
    queryFn: async () => {
      try {
        const { data } = await reportService.reportCreditExpert(expertId);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    enabled: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return reportCreditExpert;
};
export const useCreditClient = (expertId: number) => {
  const creditClient = useQuery({
    queryKey: ["creditClient"],
    queryFn: async () => {
      try {
        const { data } = await reportService.creditClient(expertId);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    enabled: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return creditClient;
};
