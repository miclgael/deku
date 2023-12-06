<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    required: true
  },
  fromLeft: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:open'])

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('update:open', false)
  }
}

const opener = ref<HTMLElement | null>(null)
const drawer = ref<HTMLElement | null>(null)

onMounted(() => {
  document?.addEventListener('keydown', handleKeydown)
  opener.value = document?.activeElement as HTMLElement
})

onUnmounted(() => {
  document?.removeEventListener('keydown', handleKeydown)
})

</script>

<template>
  <!-- Off-canvas overlay panel -->
  <teleport to="body">
    <transition name="d-drawer">
      <div
        v-if="open"
        ref="drawer"
        class="d-drawer"
        :class="[
          open ? 'd-drawer--open' : null,
        ]"
        tabindex="0"
      >
        <div class="d-drawer__content">
          <button @click="$emit('update:open', false)">
            Close
          </button>

          <slot />
        </div>
      </div>
    </transition>
    <transition name="d-drawer__overlay">
      <div
        v-if="open"
        class="d-drawer__overlay"
      />
    </transition>
  </teleport>
</template>

<style scoped>
@layer features {
  .d-drawer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: none;
  }

  .d-drawer--open {
    display: block;
    pointer-events: auto;
    opacity: 1;
  }

  .d-drawer__overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0.5rem);
  }

  .d-drawer__content {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    transform: translateX(-100%);
    max-width: 768px;
    padding: 1rem;
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
  }

  .d-drawer--open .d-drawer__content {
    transform: translateX(0);
  }

  .d-drawer__content > button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 3;
  }

  .d-drawer-enter-active,
  .d-drawer-leave-active {
    transition: transform 0.2s ease-in-out;
  }

  .d-drawer-enter-from,
  .d-drawer-leave-to {
    transform: translateX(100%);
  }

  .d-drawer-enter-to,
  .d-drawer-leave-from {
    transform: translateX(0);
  }

  .d-drawer__overlay-enter-active,
  .d-drawer__overlay-leave-active {
    transition: opacity 0.1s ease-in-out;
  }

  .d-drawer__overlay-enter-from,
  .d-drawer__overlay-leave-to {
    opacity: 0;
  }

}</style>
