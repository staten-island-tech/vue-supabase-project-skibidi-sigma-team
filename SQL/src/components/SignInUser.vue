<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
import Button from 'primevue/button'
import Password from 'primevue/password'

import { StealData } from '../stores/USER_DATA';
const somethingtest1 = StealData();

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

async function signInUser() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) {
      console.error('Error signing up user:', error.message)
      errorMessage.value = error.message
      throw error
    } else {
      console.log('User signed up successfully!')
      somethingtest1.STEALTHIS(email.value) // need to grab user info before form clears
      // richard stop deleteing my code without knowing what it dooes, i had to spend 10 mins lookk for this code in my old git commints, not fun
      errorMessage.value = ''
      errorMessage.value = ''
      email.value = ''
      password.value = ''
      router.push('/home')
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="LOGIN_Vone" @submit.prevent="signInUser">
    <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
    <div>
      <input class="inputfield" required type="email" placeholder="Your email" v-model="email" />
      <Password
        class="inputfield mb-7"
        required
        type="password"
        placeholder="Your password"
        v-model="password"
        :feedback="false"
      />
    </div>
    <div>
      <Button label="Log In" type="submit" class="button block" :disabled="loading" />
    </div>
  </form>
</template>
