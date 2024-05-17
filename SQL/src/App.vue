<template>
  <div class="NAV">
<RouterLink to="/Cards">test1</RouterLink>
<RouterLink to="/General ">test2</RouterLink>
<RouterLink to="/Request">test3</RouterLink>

<!-- MAKE IT SO THAT THE NAV BAR IS ONLY VIUSBNLE AFGTER SIGING IN ( BRUH IT GOES INTO THE OTHER VIEW THAT ONLY SHOWA AFTER LOGGING IN WHAT THE HELL AM I SAYING HERE) -->
  </div>
  <RouterView />

</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>

<style>


</style>
