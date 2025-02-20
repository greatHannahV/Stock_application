import type { Meta, StoryObj } from "@storybook/react";
import SearchBarResult from "./SearchBarResult";
import { mockStocks } from "#src/services/__mock__/stocks.ts";
import { withProviders } from "#src/stories/decorators/withProviders.tsx";

type Story = StoryObj<typeof SearchBarResult>;

const meta: Meta<typeof SearchBarResult> = {
  title: "Components/SearchBarResult",
  component: SearchBarResult,
  argTypes: {
    onSearch: { action: "Cleared" },
  },
  decorators: [withProviders],
};

export default meta;

export const WithSearchTerm: Story = {
  args: {
    search: "Apple",
    stocks: mockStocks,
    bookedStocks: [],
  },
};

export const WithBookedStocks: Story = {
  args: {
    search: "Apple",
    stocks: mockStocks,
    bookedStocks: [mockStocks[0]],
  },
};

export const NoMatchingStocks: Story = {
  args: {
    search: "XYZ",
    stocks: mockStocks,
    bookedStocks: [],
  },
};
