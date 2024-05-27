<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

function REROUTE1(): void {{router.push('/reserve')}} 

</script>

<template>
 <button @click=" REROUTE1()">Reserve</button>
</template>
