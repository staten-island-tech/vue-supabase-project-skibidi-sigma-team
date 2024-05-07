<script setup>
import PrimeCard from '@/components/PrimeCard.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
const route = useRoute()
console.log(route.params.name)
const items = ref([])
async function getItems() {
  const { data } = await supabase.from('items').select() // supabase filter here, and link from homeview cards
  items.value = data
}

// display items here
onMounted(() => {
  getItems()
})
console.log(items)
</script>

<template>
  <main>
    <div class="cardContainer flex flex-row justify-center flex-wrap">
      <PrimeCard class="m-5 p-5 items-center" />
    </div>
    <h1>test</h1>
  </main>
</template>
