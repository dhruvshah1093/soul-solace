<template>
  <section class="profile-section">
    <div class="profile-card">
      <img :src="photo" alt="Profile" class="profile-photo" />
      <div class="profile-text">
        <h2 class="name">{{ name }}</h2>
        <p class="bio-text">{{ bio }}</p>
        <button class="outlined-btn" @click="scrollToServices">Book an Appointment</button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['photo', 'name', 'bio'])

function scrollToServices() {
  const el = document.getElementById('services')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.profile-section {
  min-height: 90vh; /* Almost full screen */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6f4e6; /* Light background to match SPA sections */
  padding: 2rem;
}

.profile-card {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: #ffffff; /* white box */
  animation: profile-emerge 1s ease-out;
  padding: 1rem;
  border-radius: 50px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  width: 95%;
  gap: 2rem;
}

.profile-photo {
  border-radius: 12px;
  width: 380px;
  object-fit: cover;
  flex-shrink: 0;
  align-self: stretch;
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
  text-align: center;
}

.bio-text {
  font-size: 1.25rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Button */
.outlined-btn {
  border: 2px solid #839c7a;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.6em 1.2em;
  color: #839c7a;
  background: transparent;
  border-radius: 8px;
  font-size: large;
  align-self: flex-end;
}

.outlined-btn:hover {
  background: #d2eec7;
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

@keyframes profile-emerge {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
