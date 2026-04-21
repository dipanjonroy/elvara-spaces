import { LoginTypes } from "@/types/LoginTypes";

// Admin login
export async function login(payload: LoginTypes) {
  const response = await fetch("/api/admin/login", {
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
