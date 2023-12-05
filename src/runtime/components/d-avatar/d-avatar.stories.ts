// https://storybook.js.org/docs/vue/writing-stories/introduction

import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuAvatar from './d-avatar.vue'

const meta = {
  title: 'Avatar',
  component: DekuAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'select' as Args['size'],
      options: ['sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof DekuAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DekuAvatar },
    setup() {
      return { args }
    },
    template: '<DekuAvatar v-bind="args" />'
  }),
  args: {
    src: 'https://picsum.photos/seed/picsum/400/400',
    alt: 'Random image from picsum.photos',
    size: 'md'
  }
}
