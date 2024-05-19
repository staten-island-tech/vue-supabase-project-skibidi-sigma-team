<template>
  
  <RouterView />
<!-- Use this for pinia state mangment so that it stays after relkoading (npm install pinia-plugin-persistedstate) -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>

<style>


</style>
