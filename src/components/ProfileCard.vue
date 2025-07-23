<template>
  <div class="profile">
    <img :src="photo" alt="Profile" class="profile-photo" />
    <div class="profile-bio">
      <h2>{{ name }}</h2>
      <p>{{ bio }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['photo', 'name', 'bio'])
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  padding: 2rem;
}

.profile-photo {
  border-radius: 100px;
  width: 150px;
  margin-right: 2rem;
}

.profile-bio {
  flex: 1;
}
</style>
