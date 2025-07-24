<template>
  <section class="hero">
    <div class="overlay">
      <p class="guiding-light">{{ message }}</p>
      <button class="overlay-message">Get Started</button>
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
  perspective: 800px;
}

.overlay-message {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.6em 1.2em;
  color: #e3bfbf;
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 0 20px 4px rgba(255, 186, 186, 0.844);
  animation: emerge 10s ease-out forwards;
  transform: translateZ(-50px);
  font-size: large;
}

@keyframes emerge {
  from {
    top:90%;
    opacity: 0;
  }
  to {
    top:53%;
    opacity: 1;
  }
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
  animation: slide-up-2 12s ease forwards;
}

@keyframes slide-up-2 {
  from {
    top: 70%;
  }
  to {
    top: 30%;
  }
}
</style>
