import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export const QueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
