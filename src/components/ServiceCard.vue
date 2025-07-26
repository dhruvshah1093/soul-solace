<template>
  <div class="card">
    <img :src="image" alt="Service image" class="service-image" />
    <h3 class="service-title">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: {
    type: String,
    default: 'https://via.placeholder.com/300x200?text=Service+Image',
  },
})
</script>

<style scoped>
.card {
  background: #839c7a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 350px;
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 1.1rem;
}

</style>
