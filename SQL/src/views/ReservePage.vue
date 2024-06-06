<script setup>
import ItemReserve from '@/components/ItemReserve.vue'
import Button from 'primevue/button'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { ref, onMounted, reactive } from 'vue'
import { StealData } from '../stores/USER_DATA'
const router = useRouter()
const somethingtest1 = StealData()
onMounted(() => {
  if (somethingtest1.email === '') {
    router.push('/')
  }
})
</script>

<template>
  <div class="container">
    <ItemReserve />
    <Button
      icon="pi pi-times"
      severity="danger"
      aria-label="Cancel"
      label="Return Home"
      class="top-5 left-5"
      @click="router.push('/home')"
    />
  </div>
</template>
