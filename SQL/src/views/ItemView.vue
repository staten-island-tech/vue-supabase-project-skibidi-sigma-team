<script setup>
import PrimeCard from '@/components/PrimeCard.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
import { StealData } from '../stores/USER_DATA'
import Toolbar from 'primevue/toolbar'
const somethingtest1 = StealData()
const route = useRoute()
console.log(route.params.name)
const items = ref([])
async function getItems() {
  const { data, error } = await supabase.from('items').select().eq('name', `${route.params.name}`)
  items.value = data
}

// display items here
onMounted(() => {
  getItems()
  if (somethingtest1.email === '') {
    router.push('/')
  }
})
console.log(items)
</script>

<template>
  <main>
    <div class="cardContainer flex flex-row justify-center flex-wrap">
      <PrimeCard
        class="m-5 p-5 items-center"
        v-for="item in items"
        :key="item.id"
        :item="item"
        :editing="true"
      />
    </div>
  </main>
</template>
