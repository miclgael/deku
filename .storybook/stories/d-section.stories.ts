// https://storybook.js.org/docs/vue/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/vue3'
import DekuSection from '../../src/runtime/components/global/d-section/d-section.vue'
import { themes } from '../../src/runtime/components/global/d-theme/d-theme.config'
const meta = {
  title: 'Section',
  component: DekuSection,
  tags: ['autodocs'],
} satisfies Meta<typeof DekuSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    theme: {
      type: 'select',
      options: Object.keys(themes)
    },
    element: {
      type: 'select',
      options: ['div', 'section', 'article', 'aside', 'header', 'footer', 'main']
    },
    useContainer: {
      type: 'boolean'
    }
  },
  render: (args, { argTypes }) => ({
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
