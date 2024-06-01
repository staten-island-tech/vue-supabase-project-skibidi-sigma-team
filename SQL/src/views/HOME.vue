<script setup lang="ts">
import { StealData } from '../stores/USER_DATA';
import { useRoute, useRouter } from 'vue-router'
const somethingtest1 = StealData();
const router = useRouter()

function REROUTE(): void {if(somethingtest1.email === ''){router.push('/')}} 
</script>

<template>  
  <div class="NAV">
<RouterLink to="/Cards">test1</RouterLink>
<RouterLink to="/General ">test2</RouterLink>
<RouterLink to="/Request">test3</RouterLink>
<RouterLink to="/home">HOME</RouterLink>
  </div>

  <div>

    <p>EMAIL?: {{somethingtest1.email}}</p>
    
  </div>

  <button @click="somethingtest1.clearUser(), REROUTE() ">LOG OUT!</button>
</template>
