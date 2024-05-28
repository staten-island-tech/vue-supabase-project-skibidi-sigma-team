<script setup lang="ts">
import TIGER from '../components/TIGER.vue'
import LION from '../components/LION.vue'
import PasswordCard from '../components/PasswordCard.vue'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
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
  <main>
    <TIGER />
    <LION />
    <PasswordCard :method="signUpUser" />
    <PasswordCard :method="signInUser" />
  </main>
</template>
<!-- make login, show error messaghe -->
