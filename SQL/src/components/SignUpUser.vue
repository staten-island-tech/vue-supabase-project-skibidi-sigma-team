<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
import Button from 'primevue/button'
import Password from 'primevue/password'
import { StealData  } from '../stores/USER_DATA';

const router = useRouter()
const email = ref('')
const password = ref('')
const stealing = StealData();
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
      stealing.STEALTHIS(email.value)
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
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <div>
        <input class="inputfield" required type="email" placeholder="Your email" v-model="email" />
        <Password
          v-model="password"
          class="inputfield mb-7"
          required
          type="password"
          :feedback="false"
          placeholder="Create password"
          minlength="6"
        />
      </div>
      <div>
        <Button label="Sign Up" type="submit" class="button block" :disabled="loading" />
      </div>
    </div>
  </form>
</template>
