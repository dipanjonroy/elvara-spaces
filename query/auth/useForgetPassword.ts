import { forgetPassword } from "@/services/AuthServices";
import { ApiResponse } from "@/types/ApiResponse";
import { useMutation } from "@tanstack/react-query";

export function useForgetPassword() {
  const mutation = useMutation<ApiResponse, Error, string>({
    mutationFn: forgetPassword,
  });

  return mutation;
}
