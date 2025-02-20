import { Meta, StoryFn } from "@storybook/react";
import { TableHeaderProps } from "../Table/Table.types";
import TableHeader from "./TableHeader";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    tableHeaders: {
      control: "object",
    },
  },
} as Meta;

const Template: StoryFn<TableHeaderProps> = (args) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  tableHeaders: {
    shortName: "Name",
    regularMarketPreviousClose: "Previous Close",
    regularMarketPrice: "Last",
    regularMarketChangePercent: "%",
    regularMarketChange: "+/-",
    regularMarketTime: "Trade Time",
    symbol: "Symbol",
  },
};
