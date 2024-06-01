<script setup lang="ts">

import { StealData } from '../stores/USER_DATA';
import { useRoute, useRouter } from 'vue-router'
const somethingtest1 = StealData();
const router = useRouter()

function REROUTE(): void {if(somethingtest1.email === ''){router.push('/')}} 


import PrimeCard from '@/components/PrimeCard.vue'
import InputText from 'primevue/inputtext'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const items = ref([])
async function getItems() {
  const { data } = await supabase.from('items').select()
  items.value = data
}
/* function itemChecker(input, item) {
  if (input in item.name) {
    console.log(item.name)
  }
}
async function searchItem(input) {
  items.value.forEach((item) => itemChecker(input, item))
}
 */
onMounted(() => {
  getItems()
})
console.log(items)
</script>

<template>
  <main>
    <InputText
      class="sticky w-[100%] top-0 left-0 z-40 justify-center align-center"
      type="text"
      id="search"
      placeholder="Search here"
      v-model="value"
      @input="searchItem(value)"
    />
    <div class="cardContainer flex flex-row justify-center flex-wrap">
      <PrimeCard
        class="items-center flex flex-col text-center justify-center m-[2rem] top-[-10px] p-[1.5rem] w-[20%] height-[150%]"
        v-for="item in items"
        :key="item.id"
        :item="item"
        :editing="false"
      />
    </div>
  </main>

  <div class="NAV">
<RouterLink to="/Cards">test1</RouterLink>
<RouterLink to="/General ">test2</RouterLink>
<RouterLink to="/Request">test3</RouterLink>
<RouterLink to="/home">HOME</RouterLink>
  </div>

  <div>

<p>EMAIL?: {{somethingtest1.email}}</p>

</div>

<button @click="somethingtest1.clearUser(), REROUTE() ">LOG OUT!</button>

</template>
