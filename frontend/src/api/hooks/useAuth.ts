import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";
import { AxiosResponse } from "axios";
import { User } from "@/types/auth";

export const useLogin = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (res: AxiosResponse<User>) => {
      navigate(`/${res.data.id}`);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return loginMutation;
};
