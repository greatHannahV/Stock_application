import { Meta, StoryFn } from "@storybook/react";
import ChartContent from "./ChartContent";
import { ChartContentProps } from "./ChartContent.types";
import { withProviders } from "../../stories/decorators/withProviders";
import { BIG_CHART_DATA_MOCK } from "#src/services/__mock__/chart-data.ts";

export default {
  title: "Components/ChartContent",
  component: ChartContent,
  decorators: [withProviders],
} as Meta;

const Template: StoryFn<ChartContentProps> = (args) => (
  <ChartContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selectedCompany: BIG_CHART_DATA_MOCK,
};
