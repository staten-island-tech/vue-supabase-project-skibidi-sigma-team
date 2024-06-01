<script setup lang="ts">
import { ref } from 'vue'
import TIGER from '../components/SignUpUser.vue'
import LION from '../components/SignInUser.vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
const isRecurringUser = ref(true)
</script>

<template>
  <main>
    <div class="container flex justify-center align-center">
      <Card v-if="isRecurringUser" class="text-center absolute top-[30%] left-[35%]">
        <template #title>Sign in here</template>
        <template #content>
          <LION />
        </template>
      </Card>
      <Card v-if="!isRecurringUser" class="text-center absolute top-[30%] left-[35%]">
        <template #title>Sign up here</template>
        <template #content>
          <TIGER />
        </template>
      </Card>
    </div>
    <div class="buttonContainer text-center m-auto p-15 absolute top-[60%] left-[45%]">
      <Button
        v-if="isRecurringUser"
        label="New user?"
        @click="isRecurringUser = !isRecurringUser"
      />
      <Button
        v-if="!isRecurringUser"
        label="Already a user?"
        @click="isRecurringUser = !isRecurringUser"
      />
    </div>
  </main>
</template>
<!-- make login, show error messaghe -->
