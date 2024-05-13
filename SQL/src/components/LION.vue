<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)

async function signInUser() {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) {
      console.error('Error signing up user:', error.message)
      throw error
    } else {
      console.log('User signed up successfully!')
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
    <div class="somethingtest">
      <h1>if u alr a user</h1>
      <p>Log in down below!</p>
      <div>
        <input class="inputfield" required type="email" placeholder="Your email" v-model="email" />
        <input
          class="inputfield"
          required
          type="password"
          placeholder="Your password"
          v-model="password"
          minlength="6"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Log in'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
