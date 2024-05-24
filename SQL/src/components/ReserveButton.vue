<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

function REROUTE(): void {{router.push('/reserve')}} 

</script>

<template>
 <button @click="REROUTE(),">Reserve</button>
</template>
