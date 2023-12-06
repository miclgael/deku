// https://storybook.js.org/docs/vue/writing-stories/introduction

import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuAccordion from './d-accordion.vue'
import { themes } from '../global/d-theme/d-theme.config.js'
const meta = {
  title: 'Deku/Atoms/Accordion',
  component: DekuAccordion,
  tags: ['autodocs'],
  argTypes: {
    borderColor: {
      type: 'select' as Args['borderColor'],
      options: Object.keys(themes)
    }
  }
} satisfies Meta<typeof DekuAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { DekuAccordion },
    setup() {
      return { args }
    },
    template: `
      <DekuAccordion v-bind="args">
        <template #summary>Test</template>
        <p>Accordion!</p>
      </DekuAccordion>`,
  }),
  args: {
    borderColor: 'black'
  }
}
