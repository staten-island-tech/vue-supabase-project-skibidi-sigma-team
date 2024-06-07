<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

import { StealData } from '../stores/USER_DATA'

import PrimeCard from '@/components/PrimeCard.vue'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import { ref, onMounted, reactive } from 'vue'
// @ts-ignore
import { supabase } from '../lib/supabaseClient.js' 
const somethingtest1 = StealData()

function REROUTE(): void {
  if (somethingtest1.email === '') {
    router.push('/')
  }
}
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
  if (somethingtest1.email === '') {
    router.push('/')
  }
})
function pushItem(itemParam:any) {
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
    <div class="heading top-0 w-[100%] z-9 bg-white">
      <h1 class="text-6xl text-center">Maker Spalker Reberb</h1>
      <Dropdown
        v-model="selectedItem"
        :options="listOfNames"
        editable
        placeholder="Select an Item"
        class="w-5rem"
      />
      <Button label="search" @click="pushItem(selectedItem)" />
      <Button
        class="z-auto left-0 align-right flex float-right"
        icon="pi pi-user"
        severity="info"
        rounded
        aria-label="User"
        label="Sign out"
        @click="somethingtest1.clearUser(), REROUTE()"
      />
      <p class="float-right">Email: {{ somethingtest1.email }}</p>
    </div>
    <div class="reserveButton p-1 fixed flex bottom-5 right-5 z-auto flex-col">
      <Button
        icon="pi pi-bell"
        severity="help"
        class="w-[100px] h-[100px] z-auto m-1"
        aria-label="Schedule"
        label="Schedule"
        @click="router.push('/Schedule')"
      />
      <Button
        icon="pi pi-bookmark"
        severity="warning"
        class="w-[100px] h-[100px] z-auto m-1"
        aria-label="Reserve"
        label="Reserve"
        @click="router.push('/reserve')"
      />
    </div>
    <div class="cardContainer flex flex-row justify-center flex-wrap">
      <PrimeCard
      
        class="items-center flex flex-col text-center justify-center m-[2rem] top-[-10px] p-[1.5rem] w-[20%] height-[150%]"
        v-for="item in itemsObject"
        :key="item"
        :item="item"
        :editing="false"
      />
      <!--       <Button label="create item" @click="router.push('/create')" /> -->
    </div>
  </main>
</template>
