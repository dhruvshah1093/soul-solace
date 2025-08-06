<template>
  <section class="profile-section">
    <div class="content-header">
          <h2 class="name">{{ name }} </h2>
          <h2 class="subtitle">{{ subtitle }}</h2>
    </div>    
    <div class="profile-header">
      <img :src="photo" alt="Profile" class="profile-photo" />
      <div class="summary">
        <p class="">{{ degree }}</p>
        <p class="">{{ experience }}</p>
        <p class="">{{ langauges }}</p>
        <p class="">{{ availbility }}</p>
      </div>
    </div>
    <div class="profile-text">
      <p class="bio-text">{{ bio }}</p>
      <button class="outlined-btn" @click="scrollToServices">Book an Appointment</button>
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
}

.profile-card {
  height: 70vh;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  animation: profile-emerge 1s ease-out;
  padding: 1rem;
  border-radius: 30px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  width: 60%;
  gap: 2rem;
}

/* .profile-photo {
  border-radius: 12px;
  width: 400px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  align-self: stretch;
} */


.profile-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 60%;
  z-index: 10000;
}

.name {
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  justify-items: center;
  align-items: center;
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
.profile-header {
  display: flex;
  /* align-items: center; */
  max-height: 45vh;
  background: #ffffff; /* white box */
  width:60%;
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
  align-items: baseline; /* ✅ Aligns subtitle text to the baseline of name */
}

.subtitle {
  color: #A41;
  align-items: baseline;
}
.summary{
  font-size: large;
  padding: 1rem;
  font-weight: bold;
  width: 100%;
  display: block;
}

</style>
