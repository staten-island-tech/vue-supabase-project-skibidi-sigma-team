<script setup lang="ts">
import TIGER from '../components/TIGER.vue'
import LION from '../components/LION.vue'
import { StealData } from '../stores/USER_DATA';
const somethingtest1 = StealData();


</script>

<template>
  <main>
    <TIGER />
    <LION />
  </main>
  <p>EMAIL?: {{somethingtest1.email}}</p>
</template>
<!-- make login, show error messaghe -->
