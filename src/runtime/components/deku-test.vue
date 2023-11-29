<script setup>
const ctx = useNuxtApp()
console.log(ctx.$deku({ message: 'from context log' }));
</script>

<template>
  <div class="h1">
    Deku test component
  </div>
  <p>
    {{ $deku({ message: 'Nuxt Module Playground' }) }}
  </p>
</template>

<style>
.h1 {
  font-size: 2rem;
}
</style>
