<script setup lang="ts">
import { themes } from '../d-theme/d-theme.config'
import DekuTheme from '../d-theme/d-theme.vue'

defineProps({
  /**
   * Type of element to be used (e.g. section, main, footer, header, etc.)
   */
  element: {
    type: String,
    default: 'section'
  },
  /**
   * Treat the section as a container element
   */
  useContainer: {
    type: Boolean,
    default: true
  },
  /**
   * Add a background color to the section
   */
  theme: {
    type: String,
    default: 'white',
    validator: (value: string) => {
      return Object.prototype.hasOwnProperty.call(themes, value)
    }
  }
})
</script>

<template>
  <component
    :is="element"
    class="d-section"
  >
    <deku-theme :theme="theme">
      <div
        v-if="useContainer"
        class="section__inside"
      >
        <slot />
      </div>
      <slot v-else />
    </deku-theme>
  </component>
</template>

<style>
@layer features {
  .section__inside > * {
    margin: 0;
  }
  .section__inside > * + * {
    margin-top: 1rem;
  }
  .section__inside {
    position: relative;
    max-width: 94rem;
    margin: 0 auto;
    padding: .75rem 1.25rem;

    @media (min-width: 768px) {
      padding: 2rem 3rem;
    }
  }
}
</style>
