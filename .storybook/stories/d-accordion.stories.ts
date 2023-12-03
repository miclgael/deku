// https://storybook.js.org/docs/vue/writing-stories/introduction

import type { Meta, StoryObj } from '@storybook/vue3'
import DekuAccordion from '../../src/runtime/components/d-accordion/d-accordion.vue'

const meta = {
  title: 'Accordion',
  component: DekuAccordion,
  tags: ['autodocs']
} satisfies Meta<typeof DekuAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DekuAccordion },
    setup() {
      return { args }
    },
    template: '<DekuAccordion v-bind="args"><template #summary>Test</template>Accordion!</DekuAccordion>'
  })
}
