<template>
  <ContactInfo :email="contact.email" :phone="contact.phone" :address="contact.address" />
  <ContactForm />
</template>

<script setup>
import ContactInfo from '@/components/ContactInfo.vue'
import ContactForm from '@/components/ContactForm.vue'
import { ref, onMounted } from 'vue'

const contact = ref({ email: '', phone: '', address: '' })

onMounted(async () => {
  const res = await fetch('/content/contact.json')
  contact.value = await res.json()
})
</script>
