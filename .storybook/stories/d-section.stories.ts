// https://storybook.js.org/docs/vue/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/vue3'
import DekuSection from '../../src/runtime/components/d-section/d-section.vue'

const meta = {
  title: 'DekuSection',
  component: DekuSection,
  tags: ['autodocs']
} satisfies Meta<typeof DekuSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DekuSection },
    setup() {
      return { args }
    },
    template: '<DekuSection v-bind="args">Section!</DekuSection>'
  }),
  args: {
    element: 'div',
    useContainer: true,
    theme: 'gray-1'
  }
}
