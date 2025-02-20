import { Meta, StoryFn } from "@storybook/react";
import { BiggestTablesProps } from "./BiggestTables.types";
import BiggestTables from "./BiggestTables";
import { mockStocks } from "../../services/__mock__/stocks";

export default {
  title: "Components/BiggestTables",
  component: BiggestTables,
  argTypes: {
    isLoading: { control: "boolean" },
    stocks: { control: "object" },
  },
} as Meta;

const Template: StoryFn<BiggestTablesProps> = (args) => (
  <BiggestTables {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  stocks: mockStocks,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  stocks: mockStocks,
};
