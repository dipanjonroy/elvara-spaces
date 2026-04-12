"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Query = {
  children: React.ReactNode;
};

export default function QueryClientWrapper({ children }: Query) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
