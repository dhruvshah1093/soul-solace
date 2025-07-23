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
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  border-radius: 8px;
  flex: 1 1 calc(30% - 1.5rem);
  max-width: calc(30% - 1.5rem);
}
</style>
