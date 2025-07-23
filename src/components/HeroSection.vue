<template>
  <section class="hero">
    <div class="overlay">
      <p class="overlay-message">{{ message }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps(['title', 'message'])
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 60vh;
  background-image: url('/uploads/Introduction.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
}

.overlay-message {
  font-size: 3rem;
  color: #555;
}
</style>
