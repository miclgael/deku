<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore-next-line
import { levels } from './d-alert.config'
// @ts-ignore-next-line
import type { Level } from './d-alert.config'

const props = defineProps({
  level: {
    type: String,
    default: 'info',
    validator: (value: string) => {
      return levels?.includes(value as Level)
    }
  },
})

const alertLevel = ref(`deku-alert--${props.level }`)
const isVisible = ref(true)

const dismissAlert = () => {
  isVisible.value = false
}
</script>

<template>
  <dialog
    :open="isVisible"
    class="deku-alert"
    :class="alertLevel"
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
  >
    <slot
      id="dialog-title"
      name="title"
    />
    <slot id="dialog-description" />
    <form method="dialog">
      <button
        class="deku-alert__dismiss"
        @click="dismissAlert"
      >
        Close
      </button>
    </form>
  </dialog>
</template>

<style>
@layer features {
  .deku-alert {
    border-radius: 4px;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .deku-alert__dismiss {
    cursor: pointer;
  }
}

@layer utilities {
  .deku-alert {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 20rem;
    z-index: 1000;
    box-shadow: 2px 3px 3px rgba(0,0,0,0.1);
  }
}

@layer theme {
  .deku-alert--info {
    border: 1px solid #ccc;
    border-left: 4px solid black;
  }
  .deku-alert--warning {
    border: 1px solid #ccc;
    border-left: 4px solid orange;
  }
  .deku-alert--error {
    border: 1px solid #ccc;
    border-left: 4px solid red;
  }
  .deku-alert--success {
    border: 1px solid #ccc;
    border-left: 4px solid green;
  }
}
</style>
