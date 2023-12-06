<script setup lang="ts">
import { themes } from './d-theme.config.js'
defineProps({
  theme: {
    type: String,
    default: null,
    validator: (value: string) => {
      return Object.prototype.hasOwnProperty.call(themes, value);
    }
  }
})

</script>

<template>
  <div
    class="d-theme"
    :style="themes[theme]"
  >
    <slot />
  </div>
</template>
