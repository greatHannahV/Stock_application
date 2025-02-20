import { Meta, StoryFn } from "@storybook/react";
import Watchlist from "./Watchlist";

import { withProviders } from "../../stories/decorators/withProviders";

export default {
  title: "Pages/Watchlist",
  component: Watchlist,
  decorators: [withProviders],
} as Meta;

const Template: StoryFn = () => <Watchlist />;
export const Default = Template.bind({});
