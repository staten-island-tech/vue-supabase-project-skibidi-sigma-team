<template>
  <Card>
    <template #title>{{ item?.name }} </template>
    <template #subtitle>
      <p v-if="item?.instock == true">In Stock</p>
      <p v-if="item?.instock == false">Not in Stock</p>
    </template>
    <template #header>
      <img alt="user header" :src="item?.imageURL" />
    </template>
    <template #content>
      <p class="m-0" v-if="typeof item?.amount === 'number'">
        {{ item.amount }} ft/ml/amount available
      </p>
    </template>
    <template #footer>
      <div v-if="!editing" class="flex top-[50%] left-[50%] z-0">
        <router-link :to="{ name: 'item', params: { name: item?.name } }">
          <Button label="View" class="w-full z-0 top-[50%] left-[50%]" />
        </router-link>
      </div>
    </template>
  </Card>
</template>
<!--   <ul>
      <li v-for="i in items" :key="i.id">{{ i.name }}</li>
    </ul> -->
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
import Card from 'primevue/card'
import Button from 'primevue/button'
const props = defineProps({
  item: Object,
  editing: Boolean
})
</script>
