<script setup>
import PrimeCard from '@/components/PrimeCard.vue'
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
const items = ref([])
async function getItems() {
  const { data } = await supabase.from('items').select()
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
    <PrimeCard v-for="item in items" :key="item.id" :item="item" />
  </main>
</template>
