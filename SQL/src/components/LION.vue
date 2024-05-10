<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute } from 'vue-router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const signedupvalue = ref(false)

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <form class="LOGIN_Vone" @submit.prevent="signInWithEmail">
    <div class="somethingtest">
      <h1>if u alr a user</h1>
      <p>Log in down below!</p>
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
          :value="loading ? 'Loading' : 'Create user'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
