<template>
  <section class="hero">
    <div class="overlay">
      <p class="guiding-light">{{ message }}</p>
      <button class="overlay-message">Book an Appointment</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  animation: slide-up 10s ease forwards;
}
.guiding-light {
  position: absolute;
  top: 100%;
  width: 75%;
  font-size: xx-large;
  color: #a69c98;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  animation: slide-up-2 10s ease forwards;
}

@keyframes slide-up {
  from {
    top: 90%;
  }
  to {
    top: 50%;
  }
}

@keyframes slide-up-2 {
  from {
    top: 70%;
  }
  to {
    top: 20%;
  }
}
</style>
