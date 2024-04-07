<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const Makerspace_test = ref([])

async function testhang() {
  const { data } = await supabase.from('Makerspace_test').select()
  Makerspace_test.value = data
}

onMounted(() => {
  testhang()
})
</script>

<template>
  <ul>
    <li v-for="thing in Makerspace_test" :key="thing.id">{{ thing.Item }}</li>
  </ul>
</template>