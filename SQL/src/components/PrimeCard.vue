<template>
  <Card style="width: 25rem; overflow: hidden">
    <!-- <template #header>
      <img alt="user header" src="" />
    </template> -->
    <template #title>{{ item.name }}</template>
    <template #subtitle v-if="item.instock == false">Not in Stock</template>
    <template #subtitle v-if="item.instock == true">In Stock</template>
    <template #content>
      <p class="m-0" v-if="typeof item.amount === 'number'">{{ item.amount }} in stock</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="Cancel" icon="pi pi-check" severity="secondary" outlined class="w-full" />
        <Button label="Edit" class="w-full" />
      </div>
    </template>
  </Card>
</template>
<!--   <ul>
    <li v-for="i in items" :key="i.id">{{ i.name }}</li>
  </ul> -->
<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
const props = defineProps({
  item: Object
})
</script>
