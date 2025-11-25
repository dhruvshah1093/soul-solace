<template>
  <section class="profile-section">
    <div class="profile-content">
      <div class="content-header">
            <h2 class="name">{{ name }} </h2>
            <h2 class="subtitle">{{ subtitle }}</h2>
            <button class="outlined-btn" @click="scrollToServices">Book an Appointment</button>
      </div>
      <div class="profile-header">
        <img :src="photo" alt="Profile" class="profile-photo" />
        <div class="summary">
          <p class="">{{ degree }}</p>
          <p class="">{{ experience }}</p>
          <p class="">{{ langauges }}</p>
          <p class="bio-text">{{ bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps(['photo', 'name', 'subtitle', 'degree', 'experience', 'langauges', 'availbility', 'bio'])
function scrollToServices() {
  const el = document.getElementById('services')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.profile-section {
  /* justify-content: center; */
  align-items: left;
  background: #e6f4e6; /* Light background to match SPA sections */
  padding: 2rem;
  width:100%;
  position: relative;
  min-height: 100vh;
}

.profile-content {
  position: relative;
  z-index: 1;
}

.name {
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  justify-items: center;
  align-items: center;
}

.bio-text {
  padding: 0.1em 0;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-top: 1rem;
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
  float: right;
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
.profile-header {
  display: flex;
  /* align-items: center; */
  max-height: 45vh;
  background: #ffffff; /* white box */
  width:95%;
  gap: 1.5rem;
  padding: 1rem;
}

.profile-photo {
  border-radius: 12px;
  width: 400px;
  height: 350px;
  object-fit: cover;
  margin-bottom: 1rem;
}
.profile-header .name {
  background: white;
  height:fit-content;
}
.name {
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1rem; /* remove default margin */
}

.content-header {
  display: flex;
  align-items: baseline;
  width: 100vw;
}

.subtitle {
  color: #A41;
  align-items: baseline;
}
.summary{
  font-size: large;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

</style>
