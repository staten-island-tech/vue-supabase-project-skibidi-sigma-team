<script setup>


import { supabase } from '../lib/supabaseClient'




async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value
    password:  password.value
    
  })
}

 


</script>

<template>
<form   >


</form>



  
</template>