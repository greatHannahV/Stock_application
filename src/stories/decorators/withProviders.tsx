import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "../../AppContext";

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const withProviders = (Story: any) => (
  <QueryClientProvider client={testQueryClient}>
    <AppProvider>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </AppProvider>
  </QueryClientProvider>
);
