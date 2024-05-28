<script style>
import Password from 'primevue/password'
import { onMounted } from 'vue'
const props = defineProps({
  method: {
    type: Function
  }
})

onMounted(() => props.method())
</script>
<template>
  <form class="LOGIN_Vone" @submit.prevent="signInUser">
    <div class="somethingtest">
      <h1>if u alr a user</h1>
      <p>Log in down below!</p>
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
