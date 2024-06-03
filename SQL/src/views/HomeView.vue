<script setup lang="ts">

import { StealData } from '../stores/USER_DATA';
import { useRoute, useRouter } from 'vue-router'
const somethingtest1 = StealData();
const router = useRouter()


function REROUTE(): void {if(somethingtest1.email === ''){router.push('/')}} 


import PrimeCard from '@/components/PrimeCard.vue'
import SpeedDial from '@/components/SpeedDial.vue'
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
