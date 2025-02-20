import { Meta, StoryFn } from "@storybook/react";
import Search from "./Search";
import { withProviders } from "../../stories/decorators/withProviders";

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  decorators: [withProviders],
  argTypes: {
    isLoading: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true,
};
