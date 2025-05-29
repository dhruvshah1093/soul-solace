<template>
  <div class="profile">
    <img :src="photo" alt="Profile" />
    <h2>{{ name }}</h2>
    <p>{{ bio }}</p>
  </div>
</template>

<script setup>
defineProps(['photo', 'name', 'bio'])
</script>

<style scoped>
.profile {
  text-align: center;
  padding: 2rem;
}
img {
  border-radius: 100px;
  width: 150px;
  margin-bottom: 1rem;
}
</style>
