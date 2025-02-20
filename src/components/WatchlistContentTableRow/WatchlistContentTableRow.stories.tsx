import { Meta, StoryFn } from "@storybook/react";
import WatchlistContentTableRow, {
  TableRowProps,
} from "./WatchlistContentTableRow";
import { withProviders } from "../../stories/decorators/withProviders.tsx";
import { mockStocks } from "../../services/__mock__/stocks.ts";

const meta: Meta<typeof WatchlistContentTableRow> = {
  title: "Components/WatchlistContentTableRow",
  component: WatchlistContentTableRow,
  decorators: [withProviders],
  argTypes: {
    stock: {
      control: {
        type: "object",
      },
    },
  },
};
export default meta;

const Template: StoryFn<TableRowProps> = (args) => (
  <WatchlistContentTableRow {...args} />
);

export const Positive = Template.bind({});
Positive.args = {
  stock: mockStocks[0],
};

export const Negative = Template.bind({});
Negative.args = {
  stock: mockStocks[1],
};
