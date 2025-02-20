import { StoryFn } from "@storybook/react";
import SkeletonElement from "./SkeletonElement";
import { SkeletonElementProps } from "./SkeletonElement.types";

export default {
  title: "Components/SkeletonElement",
  component: SkeletonElement,
  argTypes: {
    $type: {
      control: { type: "select" },
      options: [
        "text",
        "text-chart",
        "header",
        "title",
        "charts-body",
        "watchlist-title",
        "watchlist-header",
      ],
    },
  },
};

const Template: StoryFn<SkeletonElementProps> = (args) => (
  <SkeletonElement {...args} />
);

export const Text = Template.bind({});
Text.args = {
  $type: "text",
};

export const TextChart = Template.bind({});
TextChart.args = {
  $type: "text-chart",
};

export const Header = Template.bind({});
Header.args = {
  $type: "header",
};

export const Title = Template.bind({});
Title.args = {
  $type: "title",
};

export const ChartsBody = Template.bind({});
ChartsBody.args = {
  $type: "charts-body",
};

export const WatchlistTitle = Template.bind({});
WatchlistTitle.args = {
  $type: "watchlist-title",
};

export const WatchlistHeader = Template.bind({});
WatchlistHeader.args = {
  $type: "watchlist-header",
};
