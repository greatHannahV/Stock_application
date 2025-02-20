import { mockStocks } from "#src/services/__mock__/stocks.ts";
import { StoryFn } from "@storybook/react";
import BiggestTable from "./BiggestTable";
import { BiggestTableProps } from "./BiggestTable.types";

export default {
  title: "Components/BiggestTable",
  component: BiggestTable,
  args: {
    type: "gainers",
    isLoading: false,
    uniqueStocks: mockStocks,
  },
  argTypes: {
    type: {
      options: ["gainers", "losers"],
      control: { type: "select" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
};

const Template: StoryFn<BiggestTableProps> = (args) => (
  <BiggestTable {...args} />
);

export const BiggestGainers = Template.bind({});
BiggestGainers.args = {
  type: "gainers",
};

export const BiggestLosers = Template.bind({});
BiggestLosers.args = {
  type: "losers",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
