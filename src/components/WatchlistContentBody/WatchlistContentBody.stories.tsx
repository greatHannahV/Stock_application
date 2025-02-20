import { Meta, StoryObj } from "@storybook/react";
import WatchlistContentBody from "./WatchlistContentBody";
import { mockStocks } from "#src/services/__mock__/stocks.ts";
import { AppProvider } from "#src/AppContext.tsx";
import { withRouter } from "storybook-addon-remix-react-router";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof WatchlistContentBody> = {
  title: "Components/WatchlistContentBody",
  component: WatchlistContentBody,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      location: {
        pathname: "/watchlist",
      },
      routing: {
        path: "/watchlist",
      },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof WatchlistContentBody>;

export const Default: Story = {
  args: {
    bookedStocks: mockStocks.slice(0, 5),
    removeBookmark: action("removeBookmark clicked"),
  },
  render: (args) => (
    <AppProvider>
      <WatchlistContentBody {...args} />
    </AppProvider>
  ),
};
