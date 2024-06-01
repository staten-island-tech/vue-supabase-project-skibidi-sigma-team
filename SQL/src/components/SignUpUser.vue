<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
import Button from 'primevue/button'
import Password from 'primevue/password'

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
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <div>
        <input class="inputfield" required type="email" placeholder="Your email" v-model="email" />
        <Password
          v-model="password"
          class="inputfield"
          required
          type="password"
          placeholder="Create password"
          :feedback="true"
          toggleMask
          minlength="6"
        />
      </div>
      <div>
<<<<<<< HEAD:SQL/src/components/SignUpUser.vue
        <Button label="Sign Up" type="submit" class="button block" :disabled="loading" />
=======
        <input
          type="submit"
          class="button block"
          
        />
>>>>>>> 7f5233d9d21332a18ffcc26cc7445749aba96e85:SQL/src/components/TIGER.vue
      </div>
    </div>
  </form>
</template>
