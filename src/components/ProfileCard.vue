<template>
  <section class="profile-section">
    <div class="profile-card">
      <img :src="photo" alt="Profile" class="profile-photo" />
      <div class="profile-text">
        <h2 class="name">{{ name }}</h2>
        <p class="bio-text">{{ bio }}</p>
        <button class="outlined-btn" onclick="">Explore Services</button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['photo', 'name', 'bio'])
</script>

<style scoped>
.profile-section {
  min-height: 90vh; /* Almost full screen */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff; /* Light background to match SPA sections */
  padding: 2rem;
}

.profile-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #f7eeee;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  width: 95%;
  gap: 2rem;
}

.profile-photo {
  border-radius: 12px;
  width: 380px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
}

.profile-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.bio-text {
  font-size: 1.25rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Button */
.outlined-btn {
  border: 2px solid #e3bfbf;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.6em 1.2em;
  color: #e3bfbf;
  background: transparent;
  border-radius: 8px;
  font-size: large;
  align-self: flex-end;
}

.outlined-btn:hover {
  background: #fff4f4;
  color: rgb(148, 139, 139);
}

/* Responsive */
@media (max-width: 900px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
    width: 90%;
  }

  .profile-photo {
    width: 80%;
    margin-bottom: 1rem;
  }

  .profile-text {
    max-width: 90%;
  }
}
</style>
