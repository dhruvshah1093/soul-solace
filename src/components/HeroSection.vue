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
  min-height: 90vh;
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
  background-color: rgba(0, 0, 0, 0.734);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0 1rem;
  overflow: hidden;
}

.overlay-message {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  font-size: xx-large;
  color: #a69c98;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  animation: slide-up 2s ease forwards;
}

@keyframes slide-up {
  from {
    top: 100%;
  }
  to {
    top: 0;
  }
}
</style>
