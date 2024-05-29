<script setup>
import PrimeCard from '@/components/PrimeCard.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
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
    <div class="cardContainer flex flex-row justify-center flex-wrap">
      <PrimeCard
        class="m-5 p-5 items-center"
        v-for="item in items"
        :key="item.id"
        :item="item"
        :editing="false"
      />
    </div>
    <div class="dialdiv sticky top-0">
      <!--       <SpeedDial /> -->
    </div>
  </main>
</template>
