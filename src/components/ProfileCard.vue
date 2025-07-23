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
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 2rem;
}

.profile-photo {
  border-radius: 100px;
  width: 200px;
  margin-right: 2rem;
  margin-bottom: 1rem;
}

.profile-text {
  flex: 1 1 300px;
}

.name {
  font-weight: 400;
}

.bio-text {
  font-weight: 300;
  color: #555;
}
</style>
