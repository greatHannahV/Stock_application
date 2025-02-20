import { StoryFn, Meta } from "@storybook/react";
import Navigation from "./Navigation";

import { withProviders } from "#src/stories/decorators/withProviders.tsx";

export default {
  title: "Components/Navigation",
  component: Navigation,
  decorators: [withProviders],
} as Meta;

const Template: StoryFn = () => <Navigation />;

export const Default = Template.bind({});
Default.args = {};
