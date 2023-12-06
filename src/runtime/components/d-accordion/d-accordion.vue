<script setup lang="ts">
// @ts-ignore-next-line
import { themes, exclude } from '../global/d-theme/d-theme.config'
const props = defineProps({
  borderColor: {
    type: String,
    default: null,
    validator: (value: string) => {
      return Object.prototype.hasOwnProperty.call(
        exclude(['gray-1','gray-2', 'white'], themes)
      , value);
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
    /* defaults */
    border: 1px solid black;
    border-left: 4px solid black;

    /* overrides */
    border: 1px solid v-bind(themes[props.borderColor].backgroundColor);
    border-left: 4px solid v-bind(themes[props.borderColor].backgroundColor);
    background-color: color-mix(in srgb, v-bind(themes[props.borderColor].backgroundColor) 5%, white);
  }
}

@layer utilities {
  summary {
    cursor: pointer;
  }
}
</style>
