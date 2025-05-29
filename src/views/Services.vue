<template>
  <section class="service-grid">
    <ServiceCard
      v-for="service in services"
      :key="service.title"
      :title="service.title"
      :description="service.description"
    />
  </section>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
import { ref, onMounted } from 'vue'

const services = ref([])

onMounted(async () => {
  const slugs = ['therapy', 'anxiety', 'couples'] // files in /content/services/
  for (const slug of slugs) {
    const res = await fetch(`/content/services/${slug}.md`)
    const text = await res.text()
    const [, frontMatter] = text.match(/---\n([\s\S]*?)\n---/)
    const data = Object.fromEntries(
      frontMatter.split('\n').map(line => {
        const [key, ...val] = line.split(':')
        return [key.trim(), val.join(':').trim()]
      })
    )
    services.value.push(data)
  }
})
</script>

<style scoped>
.service-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
