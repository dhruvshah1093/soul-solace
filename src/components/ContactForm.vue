<template>
  <div class="contact-template">
    <div class="info-grid">
      <article class="info-card">
        <h3>Our Main Office</h3>
        <p>Online &amp; In-Person Support</p>
      </article>
      <article class="info-card">
        <h3>Phone Number</h3>
        <p>(555) 123-4567</p>
      </article>
      <article class="info-card">
        <h3>Email</h3>
        <p>{{ contactEmail }}</p>
      </article>
      <article class="info-card">
        <h3>Hours</h3>
        <p>Mon–Fri | 9:00 AM – 6:00 PM</p>
      </article>
    </div>

    <div class="message-panel">
      <p>
        Taking the first step is often the hardest but most important. We are
        here to walk alongside as you explore your path to a more fulfilled
        life.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const contactEmail = ref('contact@soul-solace.ca')

onMounted(async () => {
  const response = await fetch('/content/contact.json')
  const data = await response.json()
  contactEmail.value = data.email || contactEmail.value
})
</script>

<style scoped>
.contact-template {
  display: grid;
  grid-template-columns: minmax(240px, 360px) minmax(320px, 1fr);
  gap: 1.25rem;
  width: min(1000px, 92vw);
  padding: 2rem;
  background: #2f3a2f;
  border-radius: 10px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(110px, 1fr));
  gap: 0.9rem;
}

.info-card {
  background: #f6fbf5;
  border: 2px solid #d8ead4;
  min-height: 130px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.info-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: #2f3a2f;
  text-transform: uppercase;
}

.info-card p {
  margin: 0;
  color: #445643;
  line-height: 1.4;
}

.message-panel {
  background: #9ed7dd;
  border: 2px solid #d4eef1;
  min-height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.message-panel p {
  margin: 0;
  font-size: 1.35rem;
  line-height: 1.5;
  color: #1f2b2f;
  max-width: 36ch;
}

@media (max-width: 900px) {
  .contact-template {
    grid-template-columns: 1fr;
  }

  .message-panel {
    min-height: 220px;
  }
}

@media (max-width: 560px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .message-panel p {
    font-size: 1.1rem;
  }
}
</style>
