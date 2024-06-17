// import { InputData, User } from "@/types/auth";
import { AxiosResponse } from "axios";
import { instance } from "../config";
import { User, AuthInput } from "@/types/auth";

export const authService = {
  login: async (loginData: AuthInput): Promise<AxiosResponse<User>> => {
    const response = await instance.post<User>(`/login/${loginData.username}`);
    return response;
  },
};
