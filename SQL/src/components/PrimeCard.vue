<template>
  <Card>
    <template #title>{{ item.name }}</template>
    <template #subtitle>
      <p v-if="item.instock == true">In Stock</p>
      <p v-if="item.instock == false">Not in Stock</p>
    </template>
    <template #content>
      <p class="m-0" v-if="typeof item.amount === 'number'">
        {{ item.amount }}
      </p>
    </template>
  </Card>
</template>
<!--   <ul>
      <li v-for="i in items" :key="i.id">{{ i.name }}</li>
    </ul> -->
<script setup>
import Card from 'primevue/card'

const props = defineProps({
  item: Object
})
</script>
