<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
import Password from 'primevue/password'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

async function signUpUser() {
  try {
    loading.value = true

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
    loading.value = false
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
        <Password
          class="inputfield"
          required
          type="password"
          placeholder="Create password"
          :feedback="true"
          toggleMask
          minlength="6"
          v-model="password"
        />
        <!-- https://stackoverflow.com/questions/67163183/based-on-length-how-to-check-values-in-vuejs-->
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Create user'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
