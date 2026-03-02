<template>
  <section class="hero">
    <div class="overlay">
      <p class="guiding-light">{{ message }}</p>
      <iframe
        class="overlay-button"
        frameborder="0"
        scrolling="no"
        src="https://soul-solace.janeapp.com/embed/book_online"
        title="Book online"
        style="transform: scale(1.5);" 
      ></iframe>
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
  left: 47%;
  display: flex;
  font-size: x-large;
  animation: emerge 10s ease-out forwards;
  transform: translateX(-50%) translateZ(-50px);
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
    left: 45%;
    max-width: 80%;
    font-size: clamp(1rem, 5vw, 2rem);
  }
  .overlay-button {
    left: 35%;
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
