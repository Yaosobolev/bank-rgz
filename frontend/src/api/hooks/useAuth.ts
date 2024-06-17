import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useLogin = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: () => {
      navigate(`/credit-contract`);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return loginMutation;
};
