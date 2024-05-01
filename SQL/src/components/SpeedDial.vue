<template>
  <SpeedDial
    :model="items"
    :radius="80"
    type="semi-circle"
    direction="right"
    class="top-[calc(50% - 2rem)] left-0"
  />
</template>
<script setup>
import SpeedDial from 'primevue/speeddial'
</script>
