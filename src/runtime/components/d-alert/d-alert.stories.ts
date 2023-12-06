// https://storybook.js.org/docs/vue/writing-stories/introduction

import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuAlert from './d-alert.vue'

// @ts-ignore-next-line
import { levels } from './d-alert.config'

const meta = {
  title: 'Deku/Atoms/Alert',
  component: DekuAlert,
  tags: ['autodocs'],
  argTypes: {
    level: {
      type: 'select' as Args['level'],
      options: levels
    }
  }
} satisfies Meta<typeof DekuAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DekuAlert },
    setup() {
      return { args }
    },
    template: `
    <div style="min-height: 20vh">
      <DekuAlert v-bind="args">
        <template #title>Alert</template>
        <p>Info alert</p>
      </DekuAlert>
    </div>`
  }),
  args: {
    level: 'success',
  }
}
