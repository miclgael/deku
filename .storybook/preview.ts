import type { Preview } from "@storybook/vue3";

import '../src/runtime/assets/main.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
  },
};

export default preview;
