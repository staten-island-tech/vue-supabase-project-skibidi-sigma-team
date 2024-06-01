<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
<<<<<<< HEAD:SQL/src/components/SignInUser.vue
import Button from 'primevue/button'
import Password from 'primevue/password'
=======
import { StealData  } from '../stores/USER_DATA';
>>>>>>> 7f5233d9d21332a18ffcc26cc7445749aba96e85:SQL/src/components/LION.vue

const router = useRouter()
const email = ref('')
const password = ref('')
<<<<<<< HEAD:SQL/src/components/SignInUser.vue
const loading = ref(false)
const errorMessage = ref('')
=======
const stealing = StealData();
>>>>>>> 7f5233d9d21332a18ffcc26cc7445749aba96e85:SQL/src/components/LION.vue

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
<<<<<<< HEAD:SQL/src/components/SignInUser.vue
      console.log('User signed up successfully!')
      errorMessage.value = ''
=======
      console.log('User logged in successfully!')
      stealing.STEALTHIS(email.value)
>>>>>>> 7f5233d9d21332a18ffcc26cc7445749aba96e85:SQL/src/components/LION.vue
      email.value = ''
      password.value = ''
      router.push('/home')

    }
  } finally {
 
  }
}
</script>

<template>
  <form class="LOGIN_Vone" @submit.prevent="signInUser">
<<<<<<< HEAD:SQL/src/components/SignInUser.vue
    <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
    <div>
      <input class="inputfield" required type="email" placeholder="Your email" v-model="email" />
      <Password
        class="inputfield"
        required
        type="password"
        placeholder="Your password"
        v-model="password"
        :feedback="false"
        toggleMask
      />
    </div>
    <div>
      <Button label="Log In" type="submit" class="button block" :disabled="loading" />
=======
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
         
        />
      </div>
>>>>>>> 7f5233d9d21332a18ffcc26cc7445749aba96e85:SQL/src/components/LION.vue
    </div>
  </form>
</template>
