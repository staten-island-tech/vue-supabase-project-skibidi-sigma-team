<script setup lang="ts">
import TIGER from '../components/SignUpUser.vue'
import LION from '../components/SignInUser.vue'
import Card from 'primevue/card'
</script>

<template>
  <main>
    <Card>
      <template #content>
        <TIGER class="m-0 text-center" />
        <LION class="text-center" />
      </template>
    </Card>
  </main>
</template>
<!-- make login, show error messaghe -->
