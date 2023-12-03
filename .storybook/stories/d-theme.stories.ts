// https://storybook.js.org/docs/vue/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/vue3'
import DekuTheme from '../../src/runtime/components/global/d-theme/d-theme.vue'
import { themes } from '../../src/runtime/components/global/d-theme/d-theme.config'
const meta = {
  title: 'Theme',
  component: DekuTheme,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      type: 'select',
      options: Object.keys(themes)
    }
  }
} satisfies Meta<typeof DekuTheme>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'gray-1'
  }
}
