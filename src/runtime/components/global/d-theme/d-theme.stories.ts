// https://storybook.js.org/docs/vue/writing-stories/introduction
import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DekuTheme from './d-theme.vue'

// @ts-ignore-next-line
import { themes } from './d-theme.config'

const meta = {
  title: 'Deku/Global/Theme',
  component: DekuTheme,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      type: 'select' as Args['theme'],
      options: Object.keys(themes)
    }
  }
} satisfies Meta<typeof DekuTheme>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'primary'
  }
}

export const Primary: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'primary'
  }
}

export const Secondary: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'secondary'
  }
}

export const Tertiary: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'tertiary'
  }
}

export const Info: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'info'
  }
}

export const Success: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'success'
  }
}

export const Warning: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'warning'
  }
}

export const Danger: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'danger'
  }
}

export const Error: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'error'
  }
}

export const Black: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'black'
  },
}

export const White: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'white'
  },
}

export const Gray1: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'gray-1'
  },
}

export const Gray2: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'gray-2'
  },
}

export const Gray3: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'gray-3'
  },
}

export const Disable: Story = {
  render: (args) => ({
    components: { DekuTheme },
    setup() {
      return { args }
    },
    template: '<DekuTheme v-bind="args">Theme!</DekuTheme>',
  }),
  args: {
    theme: 'disable'
  }
}
