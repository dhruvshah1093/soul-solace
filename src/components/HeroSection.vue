<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </section>
</template>

<script setup>
defineProps(['title', 'message'])
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 2rem;
  background-color: #f5f7fa;
}
</style>
