<template>
  <div>
    <header class="navbar">
      <div class="brand">
        <img src="/logo.png" alt="Soul Solace Therapy logo" class="logo" />
        <span class="title">Soul Solace Therapy</span>
      </div>
      <nav>
        <a
          href="#hero"
          :class="{ active: activeTab === 'hero' }"
          @click="activeTab = 'hero'"
          >Home</a
        >
        <a
          href="#about"
          :class="{ active: activeTab === 'about' }"
          @click="activeTab = 'about'"
          >About</a
        >
        <a
          href="#services"
          :class="{ active: activeTab === 'services' }"
          @click="activeTab = 'services'"
          >Services</a
        >
        <a
          href="#contact"
          :class="{ active: activeTab === 'contact' }"
          @click="activeTab = 'contact'"
          >Contact</a
        >
      </nav>
    </header>
    <main>
      <section id="hero">
        <HeroSection :title="homeContent.title" :message="homeContent.message" />
      </section>
      <section id="about">
        <ProfileCard :photo="aboutContent.photo" :name="aboutContent.name" :bio="aboutContent.bio" />
      </section>
      <section id="services" class="service-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
        />
      </section>
      <section id="contact">
        <ContactInfo :email="contact.email" :phone="contact.phone" :address="contact.address" />
        <ContactForm />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import ContactForm from '@/components/ContactForm.vue'

const activeTab = ref('hero')
const homeContent = ref({ title: '', message: '' })
const aboutContent = ref({ photo: '', name: '', bio: '' })
const services = ref([])
const contact = ref({ email: '', phone: '', address: '' })

function parseFrontMatter(text) {
  const [, frontMatter] = text.match(/---\n([\s\S]*?)\n---/)
  return Object.fromEntries(
    frontMatter.split('\n').map(line => {
      const [key, ...val] = line.split(':')
      return [key.trim(), val.join(':').trim()]
    })
  )
}

onMounted(async () => {
  const homeRes = await fetch('/content/home.md')
  homeContent.value = parseFrontMatter(await homeRes.text())

  const aboutRes = await fetch('/content/about.md')
  aboutContent.value = parseFrontMatter(await aboutRes.text())

  const slugs = ['therapy', 'anxiety', 'couples']
  for (const slug of slugs) {
    const res = await fetch(`/content/services/${slug}.md`)
    services.value.push(parseFrontMatter(await res.text()))
  }

  const contactRes = await fetch('/content/contact.json')
  contact.value = await contactRes.json()
})
</script>

<style scoped>
.navbar {
  background: #e3bfbf;
  padding-top: 2rem;
  padding-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
nav {
  display: flex;
  gap: 1.5rem;
}
nav a {
  font-size: large;
  color: #000;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}
nav a.active {
  border-bottom-color: #000;
  font-weight: bold;
}
.brand {
  display: flex;
  align-items: center;
}
.logo {
  height:50px;
  margin-right: 1rem;
}
.title {
  font-weight: bold;
  font-size: 1.5rem;
}
#services.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-evenly;
  min-height: 80vh;
  width: 100%;
}
#about {
  min-height: 90vh;
  width: 100%;
}

main {
  padding-top: 80px;
}

section {
  scroll-margin-top: 80px;
}
</style>
