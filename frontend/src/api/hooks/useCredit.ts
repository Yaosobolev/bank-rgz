import { Credit } from "@/types/credit";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { creditService } from "../services/creditService";
import { toast } from "sonner";

export const useCreateCredit = () => {
  const сreateCreditMutation = useMutation({
    mutationFn: creditService.createCredit,
    onSuccess: (res: AxiosResponse<Credit>) => {
      console.log("credit:", res);
      toast.success("Кредит выдан");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error("Ошибка");
    },
  });

  return сreateCreditMutation;
};

export const useUpdateCredit = () => {
  const updateCreditMutation = useMutation({
    mutationFn: creditService.updateCredit,
    onSuccess: (res: AxiosResponse<Credit>) => {
      console.log("credit:", res);
      toast.success("Кредит обновлен");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error("Ошибка");
    },
  });

  return updateCreditMutation;
};
