<script setup lang="ts">
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
    default: null
  },
})
</script>

<template>
  <component
    :is="element"
    :class="[ 'section', 'section--theme' ]"
  >
    <div
      v-if="useContainer"
      :class="[ 'section__inside' ]"
    >
      <slot />
    </div>
    <slot v-else />
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
