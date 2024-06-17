import { useMutation } from "@tanstack/react-query";
import { currenciesService } from "../services/currenciesService";
import { AxiosResponse } from "axios";
import { Currencies } from "@/types/currencies";
import { toast } from "sonner";

export const useCurrencies = () => {
  const currenciesMutation = useMutation({
    mutationFn: currenciesService.updateCurrencies,
    onSuccess: (res: AxiosResponse<Currencies>) => {
      console.log("Currencies:", res);
      toast.success("Курс валюты обновлен");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error("Ошибка");
    },
  });

  return currenciesMutation;
};
