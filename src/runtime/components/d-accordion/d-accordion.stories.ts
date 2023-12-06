// https://storybook.js.org/docs/vue/writing-stories/introduction

import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuAccordion from './d-accordion.vue'

// @ts-ignore-next-line
import { themes, exclude } from '../global/d-theme/d-theme.config'

const meta = {
  title: 'Deku/Atoms/Accordion',
  component: DekuAccordion,
  tags: ['autodocs'],
  argTypes: {
    borderColor: {
      type: 'select' as Args['borderColor'],
      // Excluding low contrast items
      options: exclude(['gray-1', 'gray-2', 'white'], themes)
    }
  }
} satisfies Meta<typeof DekuAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
