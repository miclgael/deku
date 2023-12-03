<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  }
})
</script>

<template>
  <figure
    class="d-avatar"
    :style="{
      width: size === 'sm' ? '2rem' : size === 'md' ? '3.5rem' : '5rem',
      height: size === 'sm' ? '2rem' : size === 'md' ? '3.5rem' : '5rem'
    }"
  >
    <img
      class="d-avatar__img"
      :src="src"
      :alt="alt"
      loading="lazy"
    >
  </figure>
</template>

<style>
@layer features {
  .d-avatar {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .d-avatar__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
