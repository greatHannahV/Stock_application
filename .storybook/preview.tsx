import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import React from "react";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      inlineStories: true,
    },

    actions: {
      argTypes: {
        on: { action: "clicked" },
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
