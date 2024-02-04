<script setup lang="ts">
// @ts-ignore-next-line
import { themes } from '../d-theme/d-theme.config'
import DekuTheme from '../d-theme/d-theme.vue'

const props = defineProps({
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
   * Treat the section as a container element
   */
  useTheme: {
    type: Boolean,
    default: true
  },
  /**
   * Use vertical spacing
   */
  useVerticalSpacing: {
    type: Boolean,
    default: true
  },
  /**
   * Use horizontal spacing
   */
  useHorizontalSpacing: {
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
  },
  /**
   * Use narrow width
   */
  narrow: {
    type: Boolean,
    default: false
  }
})

const vSpacingOnly = props.useVerticalSpacing ? '.75rem' : '0'
const vSpacingOnlyWide = props.useVerticalSpacing ? '2rem' : '0'
const hSpacingOnly = props.useHorizontalSpacing ? '1.25rem' : '1.25rem'
const hSpacingOnlyWide = props.useHorizontalSpacing ? '3rem' : '3rem'
</script>

<template>
  <component
    :is="element"
    class="d-section"
  >
    <deku-theme
      v-if="useTheme"
      :theme="theme"
    >
      <div
        v-if="useContainer"
        :class="{
          'section__inside': true,
          'section__inside--narrow': narrow
        }"
      >
        <!-- Keep theme; keep container -->
        <slot />
      </div>

      <!-- Keep theme; bypass container -->
      <slot v-else />
    </deku-theme>

    <!-- Bypass theme; bypass container -->
    <slot v-else-if="!useTheme && !useContainer" />

    <!-- Keep container, bypass theme -->
    <div
      v-else-if="useContainer && !useTheme"
      :class="{
        'section__inside': true,
        'section__inside--narrow': narrow
      }"
    >
      <slot />
    </div>
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
    padding-top: v-bind(vSpacingOnly);
    padding-bottom: v-bind(vSpacingOnly);
    padding-left: v-bind(hSpacingOnly);
    padding-right: v-bind(hSpacingOnly);

    @media (min-width: 768px) {
      padding-top: v-bind(vSpacingOnlyWide);
      padding-bottom: v-bind(vSpacingOnlyWide);
      padding-left: v-bind(hSpacingOnlyWide);
      padding-right: v-bind(hSpacingOnlyWide);
    }
  }
  .section__inside--narrow {
    max-width: 80ch;
  }
}
</style>
