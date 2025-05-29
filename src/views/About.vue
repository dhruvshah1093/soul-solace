<template>
  <ProfileCard :photo="about.photo" :name="about.name" :bio="about.bio" />
</template>

<script setup>
import ProfileCard from '@/components/ProfileCard.vue'
import { ref, onMounted } from 'vue'

const about = ref({ photo: '', name: '', bio: '' })

onMounted(async () => {
  const res = await fetch('/content/about.md')
  const text = await res.text()
  const [, frontMatter] = text.match(/---\n([\s\S]*?)\n---/)
  const data = Object.fromEntries(
    frontMatter.split('\n').map(line => {
      const [key, ...val] = line.split(':')
      return [key.trim(), val.join(':').trim()]
    })
  )
  about.value = data
})
</script>
