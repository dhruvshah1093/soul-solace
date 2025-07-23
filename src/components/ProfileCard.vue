<template>
  <div class="profile">
    <img :src="photo" alt="Profile" class="profile-photo" />
    <div class="profile-text">
      <h2 class="name">{{ name }}</h2>
      <p class="bio-text">{{ bio }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['photo', 'name', 'bio'])
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 90vh;
  justify-content: center;
  text-align: center;
}

.profile-photo {
  border-radius: 100px;
  width: 200px;
  margin-bottom: 1rem;
}

.profile-text {
  max-width: 600px;
}

.name {
  font-weight: 400;
}

.bio-text {
  font-weight: 300;
  color: #555;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
