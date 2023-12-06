<script setup lang="ts">
import { themes } from '../global/d-theme/d-theme.config.js'
const props = defineProps({
  borderColor: {
    type: String,
    default: null,
    validator: (value: string) => {
      return Object.prototype.hasOwnProperty.call(themes, value);
    }
  }
})
</script>

<template>
  <details>
    <summary>
      <slot name="summary" />
    </summary>
    <slot />
  </details>
</template>

<style>
@layer features {
  details {
    border-radius: 4px;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  summary {
    font-weight: bold;
  }
}

@layer theme {
  details {
    border: 1px solid #ccc;
    border-left: 4px solid black;
    border-left: 4px solid v-bind(themes[props.borderColor].backgroundColor);
    background-color: color-mix(in srgb, v-bind(themes[props.borderColor].backgroundColor) 20%, white);
  }
}

@layer utilities {
  summary {
    cursor: pointer;
  }
}
</style>
