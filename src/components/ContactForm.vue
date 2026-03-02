<template>
  <div class="contact-template">
    <div class="info-grid">
      <article class="info-card">
        <h3>Location</h3>
        <p>{{ address }}</p>
      </article>
      <article class="info-card">
        <h3>Phone Number</h3>
        <p>{{ phone }}</p>
      </article>
      <article class="info-card">
        <h3>Email</h3>
        <p>{{ contactEmail }}</p>
      </article>
      <article class="info-card">
        <h3>Hours</h3>
        <p>{{ hours }}</p>
      </article>
    </div>

    <div class="message-panel">
      <p>
        Taking the first step is often the hardest but most important. We are
        here to walk alongside as you explore your path to a more fulfilled
        life.
      </p>

      <div class="social-links" aria-label="Social profiles">
        <a
          class="social-link"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12"
            />
          </svg>
          <span>Facebook</span>
        </a>

        <a
          class="social-link"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2m0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5m8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8"
            />
          </svg>
          <span>Instagram</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const contactEmail = ref('contact@soul-solace.ca')
const phone = ref('416-939-4034')
const address = ref('Coming Soon')
const hours = ref('Mon–Fri | 9:00 AM – 6:00 PM')

onMounted(async () => {
  const response = await fetch('/content/contact.json')
  const data = await response.json()
  contactEmail.value = data.email || contactEmail.value
  phone.value = data.phone
  address.value = data.address
  hours.value = data.hours
})
</script>

<style scoped>
.contact-template {
  display: grid;
  grid-template-columns: minmax(240px, 360px) minmax(320px, 1fr);
  /* gap: 1.25rem; */
  width: min(1000px, 92vw);
  padding: 2rem;
  /* background: #2f3a2f; */
  /* border-radius: 10px; */
  /* box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2); */
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(110px, 1fr));
  /* gap: 0.9rem; */
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
  background: rgba(150, 195, 36, 0.2);
  border: 2px solid #d4eef1;
  min-height: 290px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

.social-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #445643;
  border-radius: 999px;
  padding: 0.5rem 0.9rem;
  text-decoration: none;
  color: #1f2b2f;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.72);
}

.social-link svg {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}

.social-link:hover,
.social-link:focus-visible {
  background: #ffffff;
  border-color: #2f3a2f;
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
