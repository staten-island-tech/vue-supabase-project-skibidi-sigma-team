<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const errorMessage = ref('')

async function signUpUser() {
  try {


    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })

    if (error) {
      console.error('Error signing up user:', error.message)
      errorMessage.value = error.message
      throw error
    } else {
      console.log('User signed up successfully!')
      email.value = ''
      password.value = ''
      router.push('/home')
    }
  } finally {

  }
}
</script>

<template>
  <form class="LOGIN_Vone" @submit.prevent="signUpUser">
    <div class="somethingtest">
      <h1>YO SUp</h1>
      <p>Sign up down below!</p>
      <p>{{ errorMessage }}</p>
      <div>
        <input class="inputfield" required type="email" placeholder="Your email" v-model="email" />
        <input
          class="inputfield"
          required
          type="password"
          placeholder="Create password"
          v-model="password"
          minlength="6"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          
        />
      </div>
    </div>
  </form>
</template>
