<template>
  <section class="profile-section">
    <div class="content-header">
      <h2 class="name">{{ name }} </h2>
      <h2 class="subtitle">{{ subtitle }}</h2>
    </div>
    
    <div class="profile-grid">
      <div class="photo-only">
        <img :src="photo" alt="Profile" class="profile-photo" />
      </div>

      <div class="profile-info">
        <div class="summary">
          <ul class="summary-list">
            <li>{{ degree }}</li>
            <li>{{ experience }}</li>
            <li>{{ langauges }}</li>
          </ul>
        </div>
        <div class="bio-container">
          <p class="bio-text">{{ bio }}</p>
        </div>
      </div>
    </div>
    <div class="cta-container">
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
  align-items: left;
  background: #e6f4e6;
  padding: 2rem;
  width: 100%;
  position: relative;
  min-height: 100vh;
}
.content-header {
  display: flex;
  align-items: baseline;
  width: 100%;
}
.profile-grid {
  display: grid;
  grid-template-columns: 3fr 9fr;
  align-items: flex-start;
  width: 95%;
}
.photo-only {
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem;
}
.profile-photo {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.bio-container {
  flex: 1;
  background-color: rgba(150, 195, 36, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 20px 20px 20px ;
}
.name {
  font-size: 3rem;
  font-weight: 500;
}
.subtitle {
  color: #A41;
  font-size: 1.4rem;
  margin-left: 1rem;
}

.bio-text {
  padding: 1rem 5rem;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.outlined-btn {
  border: 2px solid #839c7a;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.6em 1.2em;
  color: #839c7a;
  background: transparent;
  border-radius: 8px;
  font-size: large;
  align-self: flex-start;
}
.outlined-btn:hover {
  background: #d2eec7;
  color: rgb(148, 139, 139);
}
.summary {
  background-color: white;
  padding: 1rem;
  width: 45%;
}
.summary-list {
  margin: 0;
  padding-left: 1.5rem;
  list-style-type:square;
}
.summary-list li {
  margin-bottom: 0.8rem;
  color: #555;
  font-size: 1.3rem;
}
.cta-container {
  display: flex;
  width: 95%;
  justify-content: flex-end;
  margin-top: 5rem;
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

@media (max-width: 900px) {
  .profile-grid {
    grid-template-columns: 1fr;

  }

  .photo-only {
    justify-content: center;
    
  }

  .cta-container {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .profile-section {
    padding: 1rem;
    min-height: auto;
  }

  .name {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .profile-photo {
    max-width: 200px;
  }
  .summary {
    font-size: medium;
  }
  .content-header{
   margin-bottom: 1rem;
  }
}
</style>
