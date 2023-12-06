// https://storybook.js.org/docs/vue/writing-stories/introduction
import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuSection from './d-section.vue'

// @ts-ignore-next-line
import { themes } from '../d-theme/d-theme.config'

const meta = {
  title: 'Deku/Global/Section',
  component: DekuSection,
  tags: ['autodocs'],
} satisfies Meta<typeof DekuSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    theme: {
      type: 'select' as Args['theme'],
      options: Object.keys(themes)
    },
    element: {
      type: 'select' as Args['element'],
      options: ['div', 'section', 'article', 'aside', 'header', 'footer', 'main']
    },
    useContainer: {
      type: 'boolean'
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
