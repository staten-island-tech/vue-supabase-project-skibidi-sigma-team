<script setup>
import TimeReserve from '@/components/TimeReserve.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
import { StealData } from '../stores/USER_DATA'
import Button from 'primevue/button'
const somethingtest1 = StealData()
const router = useRouter()

function RESERVEREROUTE() {
  router.push('/reserve')
}

async function check() {
  const { data, error } = await supabase.from('ReserveTime').select('*')
  console.log(somethingtest1.email)
  data.forEach((row) => {
    if (row.EMAIL == somethingtest1.email) {
      RESERVEREROUTE()
    } else {
      null
    }
  })
}
onMounted(() => {
  if (somethingtest1.email === '') {
    router.push('/')
  }
})
</script>

<template>
  <div class="container">
    <TimeReserve />
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
