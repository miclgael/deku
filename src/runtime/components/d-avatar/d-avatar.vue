<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>

<template>
  <figure class="d-avatar">
    <img
      class="d-avatar__img"
      :src="src"
      :alt="alt"
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
