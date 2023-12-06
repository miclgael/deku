// https://storybook.js.org/docs/vue/writing-stories/introduction
import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuTheme from './d-theme.vue'
import { themes } from './d-theme.config.js'

const meta = {
  title: 'Deku/Global/Theme',
  component: DekuTheme,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      type: 'select' as Args['theme'],
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
