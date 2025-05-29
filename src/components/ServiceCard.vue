<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'description'])
</script>

<style scoped>
.card {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
}
</style>
