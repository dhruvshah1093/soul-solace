<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </section>
</template>

<script setup>
defineProps(['title', 'message'])
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/uploads/Introduction.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}
</style>
