import { ApiResponse } from "@/types/ApiResponse";
import { LoginTypes } from "@/types/LoginTypes";

// Admin login
export async function login(payload: LoginTypes) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong.");
  }

  return data;
}

// Forget Password Email Verification
export async function forgetPassword(email: string): Promise<ApiResponse> {
  const response = await fetch("/api/auth/forget-password", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({email})
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
}
