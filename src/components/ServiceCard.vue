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
  background: linear-gradient(135deg, #e3bfbf, #e3bfbf);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
}

.card h3 {
  font-size: 1.5rem;
}

.card p {
  font-size: 1.1rem;
}
</style>
