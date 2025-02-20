import { Meta, StoryObj } from "@storybook/react";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router";
import Chart from "./Chart";
import { http, HttpResponse } from "msw";
import { basePath } from "../../services/__mock__/handlers.ts";
import QUOTE from "../../services/__mock__/v8_quote.json";
import { delay } from "q";
import { withChartQueryClient } from "#src/stories/decorators/withChartQueryClient.tsx";

const meta: Meta<typeof Chart> = {
  title: "Pages/Chart",
  component: Chart,
  decorators: [withChartQueryClient, withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { symbol: "AAPL" },
      },
      routing: {
        path: "/chart/:symbol",
      },
    }),
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Chart>;

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${basePath}/v8/finance/chart/AAPL`, () => {
          return HttpResponse.json(QUOTE);
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${basePath}/v8/finance/chart/AAPL`, async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
