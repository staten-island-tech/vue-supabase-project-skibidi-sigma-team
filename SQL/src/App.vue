<script setup>
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
</script>

<template>
  <DataTable :value="items" tableStyle="min-width: 50rem">
    <Column v-for="i in items" :key="i.id" :field="i.name" :header="i.name"></Column>
  </DataTable>
  <!--   <ul>
    <li v-for="i in items" :key="i.id">{{ i.name }}</li>
  </ul> -->
</template>
