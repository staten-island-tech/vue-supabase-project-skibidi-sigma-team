<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const email = ref('');
const password = ref('');
const loading = ref(false);
const signedupvalue = ref(false)

async function signUpUser() {
  try {

    loading.value = true;

    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) {
      throw error;
    }

    if (error) {
  console.error('Error signing up user:', error.message);
} else {
  console.log('User signed up successfully!');
  signedupvalue.value = true
  email.value = '';
    password.value = '';
}
    
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="LOGIN_Vone" @submit.prevent="signUpUser">
    <div class="somethingtest">
      <h1>YO SUp</h1>
      <p>Sign up down below!</p>
      <div>
        <input class="inputfield" required type="email" placeholder="Your email" v-model="email" />
        <input class="inputfield" required type="password" placeholder="Create password" v-model="password" />
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
