import type { Metadata } from "next";
import ResetPasswordClient from "./_components/ResetPasswordClient";

export const metadata: Metadata = {
  title: "Reset password | Elvara Spaces",
};

export default function page() {
  return <ResetPasswordClient />;
}
