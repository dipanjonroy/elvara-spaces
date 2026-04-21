import { login } from "@/services/AuthServices";
import { ApiResponse } from "@/types/ApiResponse";
import { LoginTypes } from "@/types/LoginTypes";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const loginMutation = useMutation<ApiResponse, Error, LoginTypes>({
    mutationFn: login,
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return loginMutation;
}
