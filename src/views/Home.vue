<template>
  <HeroSection :title="content.title" :message="content.message" />
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import { ref, onMounted } from 'vue'

const content = ref({ title: '', message: '' })

onMounted(async () => {
  const res = await fetch('/content/home.md')
  const text = await res.text()
  const [, frontMatter] = text.match(/---\n([\s\S]*?)\n---/)
  const data = Object.fromEntries(
    frontMatter.split('\n').map(line => {
      const [key, ...val] = line.split(':')
      return [key.trim(), val.join(':').trim()]
    })
  )
  content.value = data
})
</script>
