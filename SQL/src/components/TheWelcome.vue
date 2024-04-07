<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const Makerspace_test = ref([])

async function testhang() {
  const { data } = await supabase.from('Makerspace_test').select()
  Makerspace_test.value = data
}
/* 
async function update() {
  const { error } = await supabase
  .from('Makerspace_test')
  .update({ Amount: 2})
  .eq('id', 2)
  
}
 
This thing acctuallyy goes into the sql table and changes the value
*/
onMounted(() => {
  testhang()
/* update() */
 
 
})
</script>

<template>
  <ul>
    <li v-for="thing in Makerspace_test" :key="thing.id">{{ thing.Amount }}</li>
  </ul>
</template>