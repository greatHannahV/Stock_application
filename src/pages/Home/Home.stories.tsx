import { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { getStocksData } from "#src/services";
import { withProviders } from "#src/stories/decorators/withProviders.tsx";
import { mockStocks } from "#src/services/__mock__/stocks.ts";

export default {
  title: "Pages/Home",
  component: Home,
  decorators: [withProviders],
} as Meta;

type Story = StoryObj<typeof Home>;

export const Success: Story = {
  async beforeEach() {
    getStocksData.mockResolvedValue(mockStocks);
  },
};
export const ErrorScenario: Story = {
  async beforeEach() {
    getStocksData.mockRejectedValue(new Error("Failed to fetch data"));
  },
};
