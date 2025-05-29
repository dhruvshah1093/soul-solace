<template>
  <div class="info">
    <p>Email: {{ email }}</p>
    <p>Phone: {{ phone }}</p>
    <p>Address: {{ address }}</p>
  </div>
</template>

<script setup>
defineProps(['email', 'phone', 'address'])
</script>

<style scoped>
.info {
  padding: 1rem;
}
</style>
