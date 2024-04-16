<template>
  <div class="card overflow-hidden bg-black">
    <Card class="w-25 overflow-hidden bg-black">
      <!-- <template #header>
      <img alt="user header" src="" />
    </template> -->
      <template #header>{{ item.name }}</template>
      <template #subtitle>
        <p v-if="item.instock == true">In Stock</p>
        <p v-if="item.instock == false">Not in Stock</p>
      </template>
      <template #content>
        <p class="m-0 text-xl bg-black" v-if="typeof item.amount === 'number'">
          {{ item.amount }} in stock
        </p>
      </template>
    </Card>
  </div>
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
