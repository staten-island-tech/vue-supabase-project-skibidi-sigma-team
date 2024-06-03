<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import PrimeCard from '@/components/PrimeCard.vue'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import { ref, onMounted, reactive } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const itemsObject = ref([])
const listOfNames = ref([])
const selectedItem = ref()
const router = useRouter()
async function getItems() {
  const { data } = await supabase.from('items').select()
  itemsObject.value = data
  itemsObject.value.forEach((item) => listOfNames.value.push(item['name']))
}
onMounted(() => {
  getItems()
})
function pushItem(itemParam) {
  console.log(itemParam)
  listOfNames.value.forEach((x) => {
    if (x == itemParam) {
      router.push(`/item/${x}`)
    }
  })
}
</script>

<template>
  <main>
    <div>
      <h1 class="text-6xl text-center">Maker Spalker Reberb</h1>
      <Dropdown
        v-model="selectedItem"
        :options="listOfNames"
        editable
        placeholder="Select an Item"
        class="w-5rem"
      />
      <Button label="search" @click="pushItem(selectedItem)" />
    </div>
    <div class="cardContainer flex flex-row justify-center flex-wrap">
      <PrimeCard
        class="items-center flex flex-col text-center justify-center m-[2rem] top-[-10px] p-[1.5rem] w-[20%] height-[150%]"
        v-for="item in itemsObject"
        :key="item.id"
        :item="item"
        :editing="false"
      />
    </div>
  </main>
</template>
