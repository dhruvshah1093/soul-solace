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
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  /* More rounded corners for a softer look */
  border-radius: 16px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 140px;
}

.service-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  /* Match the card's curvature */
  border-radius: 12px;
  margin-bottom: 0.75rem;
}

.service-title {
  font-size: 1.2rem;
  margin: 0;
}

.service-description {
  font-size: 0.9rem;
  padding: 0.75rem;
}

</style>
