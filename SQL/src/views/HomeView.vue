<script setup>
import PrimeCard from '@/components/PrimeCard.vue'
import InputText from 'primevue/inputtext'
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

    <InputText
      class="fixed top-0 left-0 z-999 justify-center align-center"
      type="text"
      v-model="value"
    />
  </main>
</template>
