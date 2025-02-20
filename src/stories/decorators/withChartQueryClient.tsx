import { QueryClientProvider } from "@tanstack/react-query";
import { testQueryClient } from "./withProviders";

export const withChartQueryClient = (Story: any) => (
  <QueryClientProvider client={testQueryClient}>
    <Story />
  </QueryClientProvider>
);
