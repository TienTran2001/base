"use client";

import { createQueryClient } from "../lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";

interface QueryProviderProps {
  children: React.ReactNode;
}

export default function QueryProvider({
  children,
}: Readonly<QueryProviderProps>) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
