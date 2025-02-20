import { Meta, StoryFn } from "@storybook/react";
import DeleteButton, { DeleteButtonProps } from "./DeleteButton";
import { action } from "@storybook/addon-actions";
import { withProviders } from "#src/stories/decorators/withProviders.tsx";
import { mockStocks } from "#src/services/__mock__/stocks.ts";

export default {
  title: "Components/DeleteButton",
  component: DeleteButton,
  decorators: [withProviders],

  argTypes: {
    stock: {
      control: "object",
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const Template: StoryFn<DeleteButtonProps> = (args: DeleteButtonProps) => (
  <DeleteButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stock: mockStocks[0],
  onClick: action("Delete button clicked"),
};
