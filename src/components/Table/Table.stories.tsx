import { Meta, StoryFn } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Table.types.ts";
import { withProviders } from "../../stories/decorators/withProviders.tsx";
import { mockStocks } from "../../services/__mock__/stocks.ts";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  decorators: [withProviders],
  argTypes: {
    stocks: {
      control: {
        type: "object",
      },
    },
    isLoading: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};
export default meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  stocks: mockStocks,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  stocks: [],
};
