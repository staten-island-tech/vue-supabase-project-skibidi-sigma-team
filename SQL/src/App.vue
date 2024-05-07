<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
console.log(route.name)
/*DIV -> router-link w/ computed from 'vue'
:to */
</script>

<template>
  <RouterView />
</template>
