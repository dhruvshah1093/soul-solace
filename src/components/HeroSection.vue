<template>
  <section class="hero">
    <div class="overlay">
      <p class="guiding-light">{{ message }}</p>
      <button class="overlay-button">Get Started</button>
    </div>
  </section>
</template>

<script setup>
defineProps(['title', 'message'])
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 99vh;
  background-image: url('/uploads/Introduction.jpg');
  background-size: cover;
  background-position: center;
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

.overlay-button {
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.6em 1.2em;
  color: #839c7a;
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 0 20px 4px #8ea387;
  animation: emerge 10s ease-out forwards;
  transform: translateX(-50%) translateZ(-50px);
  font-size: clamp(1rem, 2.5vw, 1.6rem);
}

@keyframes emerge {
  from {
    top:90%;
    opacity: 0;
  }
  to {
    top:60%;
    opacity: 1;
  }
}

.guiding-light {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 75%;
  font-size: clamp(1.25rem, 3vw, 2.5rem);
  color: #a69c98;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  animation: slide-up-2 12s ease forwards;
}

@media (max-width: 768px) {
  .guiding-light {
    max-width: 90%;
    font-size: clamp(1rem, 5vw, 2rem);
  }
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
