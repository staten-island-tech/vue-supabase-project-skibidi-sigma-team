<script setup lang="ts">
import { StealData } from '../stores/USER_DATA';
const somethingtest1 = StealData();

</script>

<template>
  <main>
    <h1>hello</h1>
  </main>

  <div>

    <p>EMAIL?: {{somethingtest1.email}}</p>
  </div>
</template>
