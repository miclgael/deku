import type { Preview } from "@storybook/vue3";
import type { A11yParameters } from "@storybook/addon-a11y";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Rule, getRules } from "axe-core";

import '../src/runtime/assets/main.css';

const enabledTags = [
  'wcag2a',
  'wcag2aa',
  'wcag21a',
  'wcag21aa',
  'wcag22aa',
  'best-practice'
]

const enabledRules: Rule[] = getRules(enabledTags).map((ruleMetadata) => ({
  id: ruleMetadata.ruleId,
  enabled: true,
}))

const a11y: A11yParameters = {
  config: {
    rules: enabledRules,
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    a11y
  },
  decorators: [
    withThemeByDataAttribute<any>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ]
}




export default preview;
