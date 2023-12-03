// https://storybook.js.org/docs/vue/writing-stories/introduction

import type { Meta, StoryObj } from '@storybook/vue3'
import DekuAvatar from '../../src/runtime/components/d-avatar/d-avatar.vue'

const meta = {
  title: 'Avatar',
  component: DekuAvatar,
  tags: ['autodocs']
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
    src: 'https://picsum.photos/seed/picsum/800/600',
    alt: 'Random image from picsum.photos',
  }
}
