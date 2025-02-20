import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    refetch: { action: "clicked" },
    isFetching: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  refetch: action("refetch"),
  isFetching: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isFetching: true,
};

// test trigger
