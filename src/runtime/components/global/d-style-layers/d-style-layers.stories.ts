// https://storybook.js.org/docs/vue/writing-stories/introduction

import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuStyleLayers from './d-style-layers.vue'

const meta = {
  title: 'Deku/Global/Style layers',
  component: DekuStyleLayers,
  tags: ['autodocs'],
  argTypes: {
    activeLayers: {
      type: 'select' as Args['activeLayers'],
      options: ['default', 'features', 'layout', 'reset', 'theme', 'utilities']
    }
  }
} satisfies Meta<typeof DekuStyleLayers>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args, { argTypes }) => ({
    components: { DekuStyleLayers },
    setup() {
      return { args }
    },
    template: `
      <DekuStyleLayers v-bind="args"></DekuStyleLayers>
    `,
  }),
  args: {
    activeLayers: ['features']
  }
}
